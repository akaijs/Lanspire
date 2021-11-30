import React, { useEffect, useState } from 'react';
import { Card, Table, Tooltip, Button } from 'antd';
import classApi from 'api/classApi';
import { Link } from 'react-router-dom';
import { EditOutlined, EyeOutlined } from '@ant-design/icons';
import moment from 'moment';

const ClassesCourse = ({ idCourse }) => {
  const columns = [
    {
      title: 'Class name',
      dataIndex: 'className',
    },

    {
      title: 'Room',
      dataIndex: 'room',
      align: 'center',
    },
    {
      title: 'Start Date',
      dataIndex: 'startDate',
      align: 'center',
      render: date => moment(date).format('DD/MM/YYYY'),
      sorter: (a, b) => moment(a.startDate).unix() - moment(b.startDate).unix(),
    },
    {
      title: 'End Date',
      dataIndex: 'endDate',
      align: 'center',
      render: date => moment(date).format('DD/MM/YYYY'),
      sorter: (a, b) => moment(a.endDate).unix() - moment(b.endDate).unix(),
    },
    {
      title: '',
      dataIndex: 'idClass',
      align: 'center',
      width: '10%',
      render: idClass => {
        return (
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
            <Tooltip title="View class details">
              <Link to={`/class/details/${idClass}`}>
                <Button icon={<EyeOutlined />} />
              </Link>
            </Tooltip>
            <Tooltip title="Edit information">
              <Link to={`/class/edit/${idClass}`}>
                <Button type="primary" ghost icon={<EditOutlined />}></Button>
              </Link>
            </Tooltip>
          </div>
        );
      },
    },
  ];

  useEffect(() => {
    classApi
      .getByIdCourse(idCourse)
      .then(res => {
        setDataSource(res.data);
        setIsLoading(false);
      })
      .catch(err => console.log(err));
  }, []);

  const [dataSource, setDataSource] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  return (
    <Card>
      <h3>Classes of course</h3>
      <Table
        bordered
        loading={isLoading}
        columns={columns}
        dataSource={dataSource}
        rowKey={row => row.idClass}
        pagination={{
          defaultPageSize: 10,
          showSizeChanger: true,
          pageSizeOptions: ['10', '15', '20'],
        }}
      />
    </Card>
  );
};

export default ClassesCourse;
