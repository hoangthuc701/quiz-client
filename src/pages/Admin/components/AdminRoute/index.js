import { Route, Redirect } from "react-router-dom";
import { isAdmin } from "../../../../utils";

function AdminRoute({ component:Component, ...rest }) {
  const isAmin = isAdmin();
  return (
    <Route
      {...rest}
      render={({ location }) =>
      isAmin ? (
          <Component {...rest} />
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

export default AdminRoute;
