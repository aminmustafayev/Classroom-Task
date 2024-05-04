import React, { useCallback, useState } from 'react'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import StudentClass from '../../classes/studentclass';
import { getAll, post } from '../../API';
import { endpoint, endpoint2 } from '../../API/base';

const RegisterStudent = () => {
  const onFinish = async (values) => {
    const res = await getAll(endpoint)
    const res2 = await getAll(endpoint2)
    const existEmail1 = res.data.some(x => x.email == values.email2)
    const existEmail2 = res2.data.some(x => x.email == values.email2)
    if (existEmail1) {
      alert('Email Movcuddur1') 

    } else  {
      if (existEmail2) {
        alert('Email Movcuddur')
      } else {
        const newUser = new StudentClass(values.fullName2, values.username2, values.email2, values.password2, values.imageURL2)
        post(endpoint, newUser)
      }
    }

  }
  // const [value, setValue] = useState({
  //   fullName: "",
  //   userName: "",
  //   email: "",
  //   password: "",
  //   profileImage: ""
  // })

  return (

    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username2"
        rules={[
          {
            required: true,
            message: 'Please input your Student FullName!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Student User Name" />
      </Form.Item>
      <Form.Item
        name="fullName2"
        rules={[
          {
            required: true,
            message: 'Please input your Student FullName!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Student Full Name" />
      </Form.Item>

      <Form.Item
        name="email2"

        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
      >
        <Input placeholder='Enter Your Email' />
      </Form.Item>

      <Form.Item
        name="imageURL2"
        rules={[
          {
            required: true,
            message: 'Please input your Image URL!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Image URL" />
      </Form.Item>

      <Form.Item
        name="password2"
        rules={[
          {
            required: true,
            message: 'Please input your Student Password!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>


      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Register
        </Button>
      </Form.Item>
    </Form>
  )
}

export default RegisterStudent