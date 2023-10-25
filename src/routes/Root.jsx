import React from 'react'
import { UserOutlined, VideoCameraOutlined } from '@ant-design/icons'
import { Layout, Menu, theme } from 'antd'
import { Link, Outlet } from 'react-router-dom'

const { Header, Content, Footer, Sider } = Layout

const App = () => {
  const {
    token: { colorBgContainer }
  } = theme.useToken()
  console.log(colorBgContainer)
  return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider
                breakpoint="lg"
                collapsedWidth="0"
                onBreakpoint={(broken) => {
                  console.log(broken)
                }}
                onCollapse={(collapsed, type) => {
                  console.log(collapsed, type)
                }}
            >
                <div className="demo-logo-vertical" style={{
                  height: '32px',
                  margin: '16px',
                  background: 'rgba(255,255,255,.2)',
                  borderRadius: '6px'
                }}/>
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                >
                    <Menu.Item key="1" icon={<UserOutlined />}>
                        <Link to="/test">React应用</Link>
                    </Menu.Item>
                    <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                        <Link to="/test">Vue应用</Link>
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout>
                <Header style={{ padding: 24, background: colorBgContainer }} />
                <Content style={{ margin: '24px 16px 0' }}>
                    <div style={{ padding: 24, minHeight: 360, background: colorBgContainer }} id='container'><Outlet></Outlet></div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
            </Layout>
        </Layout>
  )
}

export default App
