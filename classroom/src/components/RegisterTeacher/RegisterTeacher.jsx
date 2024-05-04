import React from 'react'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import { getAll, post } from '../../API';
import { endpoint, endpoint2 } from '../../API/base';
import TeacherClass from '../../classes/teacherclass';

const RegisterTeacher = () => {
  // const [form] = Form.useForm()
  const onFinish = async (values) => {
    const result = await getAll(endpoint2)
    const result2 = await getAll(endpoint2)
    const propEmail = result.data.some(x => x.email == values.email)
    const propEmail2 = result2.data.some(x => x.email == values.email)
    if (propEmail) {
      alert('Email Movcuddur1')

    } else {
      if (propEmail2) {
        alert('Email Movcuddur')
      } else {
        const newUser2 = new TeacherClass(values.fullName, values.username, values.email, values.password, values.imageURL)
        // form.resetFields()

        post(endpoint2, newUser2)

      }
    }



  }


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
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your FullName!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="FullName" />
      </Form.Item>
      <Form.Item
        name="fullName"
        rules={[
          {
            required: true,
            message: 'Please input your FullName!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>


      <Form.Item
        name="email"

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
        name="ImageURL"
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
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
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

export default RegisterTeacher