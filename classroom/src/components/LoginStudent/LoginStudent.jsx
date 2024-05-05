import React from 'react'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import { getAll } from '../../API';
import { endpoint3, endpoint } from '../../API/base';
import Swal from 'sweetalert2'


const LoginStudent = () => {
  const [form]=Form.useForm()
  const onFinish = (values) => {

    console.log('Received values of form: ', values);
    getAll(endpoint).then((res)=>{
      const email = res.data.find((e)=>e.email === values.email && e.password === values.password)
      
      if (email) {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500
        });
        localStorage.setItem("Student Id", email.id)
        form.resetFields()
      }

      else{
        Swal.fire({
          icon: "error",
          title: "Bele bir istifadeci yoxdur",
          text: "Something went wrong!",
        });
      }
      
    })
  };
  return (
    <>
      <Form 
      form={form}
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
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
            Log in
          </Button>
          Or <a href="">register now!</a>
        </Form.Item>
      </Form>
    </>
  )
}

export default LoginStudent