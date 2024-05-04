import React from 'react'
import {  Tabs } from 'antd';
import LoginTeacher from '../LoginTeacher/LoginTeacher';
import LoginStudent from '../LoginStudent/LoginStudent';

const onChange = (key) => {
    console.log(key);
  };
  const items = [
    {
      key: '1',
      label: 'Login as Teacher',
      children: <LoginTeacher/>,
    },
    {
      key: '2',
      label: 'Login as Student',
      children: <LoginStudent/> ,
    }
  ];

const Login = () => {

  return (
<>
      <Tabs
        defaultActiveKey="1"
        items={items}
        onChange={onChange}
        indicator={{
          size: (origin) => origin - 20,
         
        }}
      />
    </>
  )
}

export default Login