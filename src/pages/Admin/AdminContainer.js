import React from "react";
import { Redirect, Switch } from "react-router-dom";
import { Layout } from "antd";
import AdminRoute from "./components/AdminRoute";
import Header from "./components/Header";
import Sider from "./components/Sider";
import routes from "./routes";

const AdminContainer = () => {
  const { Content, Footer } = Layout;

  return (
    <>
      <Header />
      <Layout>
        <Sider />
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
            Ant Design ©2021 Created by ....
          </Footer>
        </Layout>
      </Layout>
    </>
  );
};

export default AdminContainer;
