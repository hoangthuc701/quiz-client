import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Layout } from "antd";
import Header from "./components/Header";
import Footer from "./components/Footer";
import routes from "./routes";
import PrivateRoute from "./components/PrivateRoute";

const { Content } = Layout;

const UserContainer = () => (
  <Layout style={{ alignItems: "center" }}>
    <Header />
    <Content style={{ alignItems: "center" }}>
      <Switch>
        {routes.map((r) => {
          if (r.requireLogin) {
            return (
              <PrivateRoute
                key={r.path}
                path={r.path}
                component={r.main}
                exact={r.exact}
              />
            );
          }
          return (
            <Route
              key={r.path}
              path={r.path}
              component={r.main}
              exact={r.exact}
            />
          );
        })}
        <Redirect to="/404" />
      </Switch>
    </Content>
    <Footer />
  </Layout>
);

export default UserContainer;
