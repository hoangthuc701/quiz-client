import { Route, Redirect } from "react-router-dom";
import { checkLoginState } from "../../../../utils";

function PrivateRoute({ component:Component, ...rest }) {
  const isAuthenticated = checkLoginState();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated ? (
          <Component {...rest} />
        ) : (
          <Redirect
            to={{
              pathname: "/user/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;
