import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Layout } from "antd";
import Header from "./components/Header";
import Footer from "./components/Footer";
import routes from "./routes";
import PrivateRoute from "./components/PrivateRoute";

const { Content } = Layout;

const UserContainer = () => (
   <Layout style={{ minHeight: "100vh" }}>
      <Header />
      <Content style={{ display: "flex", flexDirection: "column" }}>
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
