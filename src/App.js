import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import routes from "./routes";
import "antd/dist/antd.css";
import "./styles/main.css";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          {routes.map((route) => {
            return (
              <Route
                key={route.path}
                path={route.path}
                exact={route.exact}
                component={route.main}
              />
            );
          })}
          <Redirect from="*" to="/404" />
        </Switch>
      </Router>
    </div>
  );
};
export default App;
