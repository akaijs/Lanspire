import { DeleteOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import { Button, Col, Form, Image, Modal, notification, Row, Table, Tooltip } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { updateClass } from 'redux/actions/classes';
import * as lecturerActions from 'redux/actions/lecturers';
import * as classActions from 'redux/actions/classes';
import { classState$, lecturerState$ } from 'redux/selectors';
import styles from './index.module.less';
const { confirm } = Modal;

const AddAppoint = () => {
  const columnLecturers = [
    {
      title: 'Lecturer',
      dataIndex: 'lecturerName',
    },
    {
      title: 'Gender',
      dataIndex: 'gender',
      align: 'center',
    },
    {
      title: 'Image',
      dataIndex: 'image',
      align: 'center',
      render: image => {
        return (
          <div>
            <Image src={image} style={{ width: '100px' }}></Image>
          </div>
        );
      },
    },
  ];
  const columns = [
    {
      title: 'Lecturer',
      dataIndex: 'lecturerName',
    },
    {
      title: '',
      dataIndex: 'idLecturer',
      render: idLecturer => {
        return (
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
            <Tooltip title="Delete">
              <Button danger icon={<DeleteOutlined />} onClick={() => handleDelete(idLecturer)} />
            </Tooltip>
          </div>
        );
      },
    },
  ];
  const handleDelete = idLecturer => {
    confirm({
      title: 'Do you want to dismissal this lecturer?',
      icon: <ExclamationCircleOutlined />,
      content: '',
      onOk() {
        dispatch(updateClass.updateClassRequest({ idClass: idClass, idLecturer: idLecturer }));
        if (isSuccessClasses && !isLoadingClasses) {
          notification['success']({
            message: 'Successfully',
            description: 'Delete class success',
          });
        } else {
          notification['error']({
            message: 'Notification Title',
            description: 'That class is activating',
          });
        }
      },
      onCancel() {},
    });
  };
  const handleSubmit = () => {
    dispatch(updateClass.updateClassRequest({ idClass: idClass, lecturers: selected }));
    setIsSuccess(true);
  };
  const dispatch = useDispatch();
  const { data: lecturers, isLoading } = useSelector(lecturerState$);
  const {
    data: classes,
    isSuccess: isSuccessClasses,
    isLoading: isLoadingClasses,
  } = useSelector(classState$);
  const [dataSource, setDataSource] = useState([]);
  const [currentLecturer, setCurrentLecturer] = useState([]);
  const [selected, setSelected] = useState([]);
  const { idClass } = useParams();
  const [isSuccess, setIsSuccess] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      dispatch(lecturerActions.getLecturers.getLecturersRequest());
    }, 200);
  }, [classes]);
  useEffect(() => {
    dispatch(classActions.getClasses.getClassesRequest());
  }, []);
  useEffect(() => {
    if (isSuccess && !isLoadingClasses) {
      dispatch(classActions.getClasses.getClassesRequest());
      setIsSuccess(false);
    }
  }, [isSuccessClasses]);
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      setSelected(selectedRowKeys);
    },
  };
  const mappingDatasource = dataInput => {
    const res = [];
    dataInput.map(lecturer => {
      let isExist = currentLecturer.find(
        currentLecturer => lecturer.idLecturer == currentLecturer.idLecturer
      );
      if (!isExist) {
        res.push({
          key: lecturer.idLecturer,
          idLecturer: lecturer.idLecturer,
          lecturerName: lecturer.displayName,
          gender: lecturer.gender == 1 ? 'Male' : 'Female',
          image: 'https://ungho.live/static/sitedata/ckfinder/images/11072018/1.jpg',
          // avatar: lecturer.imageUrl,
        });
      }
    });
    setDataSource(res);
  };
  const mappingCurrentLecturer = dataInput => {
    const res = [];
    if (dataInput) {
      const lecturers = dataInput.Lecturers;
      if (lecturers) {
        lecturers.map(lecturer => {
          res.push({
            key: lecturer.idLecturer,
            idLecturer: lecturer.idLecturer,
            lecturerName: lecturer.User.displayName,
          });
        });
      }
    }

    setCurrentLecturer(res);
  };
  useEffect(() => {
    mappingDatasource(lecturers);
  }, [lecturers, classes]);
  useEffect(() => {
    const classRoom = classes.find(classRoom => {
      return classRoom.idClass == idClass;
    });
    mappingCurrentLecturer(classRoom);
  }, [classes]);
  return (
    <Row justify="center" gutter={[20, 10]}>
      <Col span={8}>
        <h3>Current Lecturer</h3>
        <Table
          bordered
          columns={columns}
          dataSource={currentLecturer}
          loading={isLoadingClasses}
          rowKey={row => row.idLecturer}
          pagination={{
            defaultPageSize: 10,
            showSizeChanger: true,
            pageSizeOptions: ['10', '50', '100'],
          }}
        />
      </Col>
      <Col span={16}>
        <h3>Appoint New Lecturer</h3>

        <Table
          bordered
          columns={columnLecturers}
          dataSource={dataSource}
          loading={isLoading}
          rowKey={row => row.idLecturer}
          rowSelection={{
            selectedRowKeys: selected,
            ...rowSelection,
          }}
          pagination={{
            defaultPageSize: 10,
            showSizeChanger: true,
            pageSizeOptions: ['10', '50', '100'],
          }}
        />
        <Form.Item>
          <div className={styles.flex}>
            <Button type="primary" size="large" block onClick={handleSubmit}>
              Submit
            </Button>
          </div>
        </Form.Item>
      </Col>
    </Row>
  );
};

export default AddAppoint;