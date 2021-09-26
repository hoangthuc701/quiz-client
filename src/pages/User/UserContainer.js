import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Layout } from "antd";
import Header from "./components/Header";
import Footer from "./components/Footer";
import routes from "./routes";

const { Content } = Layout;

const UserContainer = () => (
  <Layout>
    <Header />
    <Content>
      <Switch>
        {routes.map((r) => (
          <Route
            key={r.path}
            path={r.path}
            component={r.main}
            exact={r.exact}
          />
        ))}
        <Redirect to="/404" />
      </Switch>
    </Content>
    <Footer />
  </Layout>
);

export default UserContainer;
