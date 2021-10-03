import React from "react";
import { Redirect, Switch, Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import { UserOutlined, VideoCameraOutlined } from "@ant-design/icons";
import AdminRoute from "./components/AdminRoute";
import routes from "./routes";

const AdminContainer = () => {
   const { Header, Content, Footer, Sider } = Layout;
   const { SubMenu } = Menu;

   return (
      <>
         <Header
            className="site-layout-background"
            style={{ padding: 0, position: "fixed", zIndex: 1, width: "100%" }}
         >
            Header
         </Header>
         <Layout>
            <Sider
               style={{
                  overflow: "auto",
                  height: "100vh",
                  position: "fixed",
                  left: 0,
                  top: "64px",
               }}
            >
               <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
                  <Menu.Item key="1" icon={<UserOutlined />}>
                     <Link to="/admin/overview"> Tổng quan </Link>
                  </Menu.Item>
                  <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                     Sample
                  </Menu.Item>
                  <SubMenu key="sub9" icon={<UserOutlined />} title="subnav 9">
                     <Menu.Item key="9-1">option1</Menu.Item>
                     <Menu.Item key="9-2">option2</Menu.Item>
                     <Menu.Item key="9-3">option3</Menu.Item>
                     <Menu.Item key="9-4">option4</Menu.Item>
                  </SubMenu>
               </Menu>
            </Sider>
            <Layout className="site-layout" style={{ marginLeft: 200 }}>
               <Content style={{ margin: "50px 16px 0", overflow: "initial" }}>
                  <div
                     className="site-layout-background"
                     style={{ padding: 24, textAlign: "center" }}
                  >
                     <Switch>
                        {routes.map((r) => (
                           <AdminRoute
                              key={r.path}
                              path={r.path}
                              component={r.main}
                              exact={r.exact}
                           />
                        ))}
                        <Redirect from="*" to="/admin/overview" />
                     </Switch>
                  </div>
               </Content>
               <Footer style={{ textAlign: "center" }}>
                  Ant Design ©2018 Created by Ant UED
               </Footer>
            </Layout>
         </Layout>
      </>
   );
};

export default AdminContainer;
