import React, { useState } from 'react'
import {  Tabs } from 'antd';
import RegisterTeacher from '../RegisterTeacher/RegisterTeacher';
import RegisterStudent from '../RegisterStudent/RegisterStudent';

const onChange = (key) => {
    console.log(key);
  };
  const items = [
    {
      key: '1',
      label: 'Register as Teacher',
      children: <RegisterTeacher/>,
    },
    {
      key: '2',
      label: 'Register as Student',
      children: <RegisterStudent/> ,
    }
  ];

const Register = () => {
const[says, setSays]= useState()
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

export default Register