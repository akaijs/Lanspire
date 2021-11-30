import Icon, { SettingOutlined } from '@ant-design/icons';
import Class from 'pages/Class';
import AddClass from 'pages/Class/AddClass';
import Course from 'pages/Course';
import AddCourse from 'pages/Course/AddCourse';
import ColumnTranscript from 'pages/Course/ColumnTranscript';
import CourseDetails from 'pages/Course/CourseDetails';
import CourseType from 'pages/Course/CourseType';
import Level from 'pages/Course/Level';
import Dashboard from 'pages/Dashboard';
import Employee from 'pages/Employee';
import AddEmployee from 'pages/Employee/AddEmployee';
import Lecturer from 'pages/Lecturer';
import AddLecturer from 'pages/Lecturer/AddLecturer';
import Student from 'pages/Student';
import AddStudent from 'pages/Student/AddStudent';
import StudentDetails from 'pages/Student/StudentDetails';
import ArrangeClass from 'pages/Student/StudentDetails/ArrangeClass';
import TimeFrame from 'pages/TimeFrame';
import React from 'react';
import {
  classSvg,
  courseSvg,
  dashboardSvg,
  employeeSvg,
  lecturerSvg,
  studentSvg,
  timeSvg,
} from 'utils/iconsvg';
import ClassDetails from 'pages/Class/ClassDetails';
import Setting from 'pages/Setting/Setting';
import Profile from 'pages/Setting/Profile';

const DashboardIcon = props => <Icon component={dashboardSvg} {...props} />;
const LecturerIcon = props => <Icon component={lecturerSvg} {...props} />;
const CourseIcon = props => <Icon component={courseSvg} {...props} />;
const EmployeeIcon = props => <Icon component={employeeSvg} {...props} />;
const ClassIcon = props => <Icon component={classSvg} {...props} />;
const TimeFrameIcon = props => <Icon component={timeSvg} {...props} />;
const StudentIcon = props => <Icon component={studentSvg} {...props} />;

const adminRoutes = [
  {
    path: '/',
    exact: true,
    page: () => <Dashboard />,
  },
  {
    path: '/lecturer/',
    exact: true,
    page: () => <Lecturer />,
  },
  {
    path: '/lecturer/add',
    exact: true,
    page: () => <AddLecturer />,
  },
  {
    path: '/student/list',
    exact: true,
    page: () => <Student />,
  },
  {
    path: '/student/add',
    exact: true,
    page: () => <AddStudent />,
  },
  {
    path: '/student/edit/:idStudent',
    exact: true,
    page: () => <AddStudent />,
  },
  {
    path: '/student/details/:idStudent',
    exact: true,
    page: () => <StudentDetails />,
  },
  {
    path: '/student/details/arrange-class/:idStudent',
    exact: true,
    page: () => <ArrangeClass />,
  },
  {
    path: '/course/',
    exact: true,
    page: () => <Course />,
  },
  {
    path: '/course/add',
    exact: true,
    page: () => <AddCourse />,
  },
  {
    path: '/course/edit/:idCourse',
    exact: true,
    page: () => <AddCourse />,
  },
  {
    path: '/course/details/:idCourse',
    exact: true,
    page: () => <CourseDetails />,
  },
  {
    path: '/coursetype/',
    exact: true,
    page: () => <CourseType />,
  },
  {
    path: '/coursetype/:idCourseType',
    exact: true,
    page: () => <CourseType />,
  },
  {
    path: '/level/',
    exact: true,
    page: () => <Level />,
  },
  {
    path: '/level/:idLevel',
    exact: true,
    page: () => <Level />,
  },
  {
    path: '/lecturer/edit/:id',
    exact: true,
    page: () => <AddLecturer />,
  },
  {
    path: '/columntranscript',
    exact: true,
    page: () => <ColumnTranscript />,
  },
  {
    path: '/columntranscript/:idColumn',
    exact: true,
    page: () => <ColumnTranscript />,
  },
  {
    path: '/employee/',
    exact: true,
    page: () => <Employee />,
  },
  {
    path: '/employee/add',
    exact: true,
    page: () => <AddEmployee />,
  },
  {
    path: '/time-frame',
    exact: true,
    page: () => <TimeFrame />,
  },
  {
    path: '/class/',
    exact: true,
    page: () => <Class />,
  },
  {
    path: '/class/add',
    exact: true,
    page: () => <AddClass />,
  },
  {
    path: '/class/edit/:idClass',
    exact: true,
    page: () => <AddClass />,
  },
  {
    path: '/class/details/:idClass',
    exact: true,
    page: () => <ClassDetails />,
  },
  {
    path: '/employee/edit/:id',
    exact: true,
    page: () => <AddEmployee />,
  },
  {
    path: '/setting/',
    exact: true,
    page: () => <Setting />,
  },
  {
    path: '/profile/',
    exact: true,
    page: () => <Profile />,
  },
];

const adminMenuItems = {
  path: '/',
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      icon: <DashboardIcon />,
      component: <Dashboard />,
    },
    {
      name: 'Lecturers',
      icon: <LecturerIcon />,
      path: '/lecturer/',
      component: <Lecturer />,
    },
    {
      name: 'Students',
      icon: <StudentIcon />,
      path: '/student/list',
      component: <Student />,
    },
    {
      name: 'Course',
      icon: <CourseIcon />,
      routes: [
        {
          path: '/course/',
          name: 'Course list',
          component: <Course />,
        },
        {
          path: '/coursetype/',
          name: 'Course type',
          component: <CourseType />,
        },
        {
          path: '/level/',
          name: 'Level',
          component: <Level />,
        },
        {
          path: '/columntranscript/',
          name: 'Column transcript',
          component: <ColumnTranscript />,
        },
      ],
    },
    {
      name: 'Employee',
      icon: <EmployeeIcon />,
      routes: [
        {
          path: '/employee/',
          name: 'Employee list',
          component: <Employee />,
        },
      ],
    },
    {
      path: '/time-frame',
      name: 'Time Frame',
      icon: <TimeFrameIcon />,
      component: <TimeFrame />,
    },
    {
      name: 'Class',
      icon: <ClassIcon />,
      routes: [
        {
          path: '/class/',
          name: 'Class list',
          component: <Class />,
        },
      ],
    },
    {
      name: 'Setting',
      icon: <SettingOutlined />,
      routes: [
        {
          path: '/profile/',
          name: 'Profile',
          component: <Profile />,
        },
        {
          path: '/setting/',
          name: 'Setting',
          component: <Setting />,
        },
      ],
    },
  ],
};
export { adminRoutes, adminMenuItems };
