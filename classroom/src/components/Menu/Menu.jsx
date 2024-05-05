import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import Pages from '../Content/Pages';
const { Header, Sider, Content } = Layout;

const Sidebar = function () {
  const [collapsed, setCollapsed] = useState(false);
  const [pageId, setPageId] = useState('1')
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <>
      <Layout style={{ height: '100vh' }}>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="demo-logo-vertical" />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['1']}
            onClick={(e) => {
              setPageId(e.key)
            }}
            items={[
              {
                key: '1',
                icon: <UserOutlined />,
                label: 'Login',
              },
              {
                key: '2',
                icon: <VideoCameraOutlined />,
                label: 'Register',
              },
              {
                key: '3',
                icon: <UploadOutlined />,
                label: 'Tasks',
              },
            ]}
          />
        </Sider>
        <Layout style={{ height: "100vh" }}>
          <Header
            style={{
              padding: 0,
              background: colorBgContainer,
            }}
          >
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: '16px',
                width: 64,
                height: 64,
              }}
            />
          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Pages id={pageId} />
          </Content>
        </Layout>
      </Layout>
    </>
  )
}

export default Sidebar