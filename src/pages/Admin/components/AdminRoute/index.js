import { Route, Redirect } from "react-router-dom";
import { isAdmin, isCreator } from "../../../../utils";

function DashboardRoute({ component:Component, ...rest }) {

  const checkCanAccess = (role) => {
    let user;
    try {
      user = JSON.parse(sessionStorage.getItem("userAuth"))?.user;
    }
    catch{
      user = {};
      user.role = 2;
    }
    const currentRole = user?.role ;
    if (role.includes(currentRole)){
      return true;
    }
    return false;
  }

  const isCanAccessDashboard = isAdmin() || isCreator();
  const isCanAccessThisSite = checkCanAccess(rest.role);
  return (
    <Route
      {...rest}
      render={({ location }) =>
      isCanAccessDashboard && isCanAccessThisSite ? (
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

export default DashboardRoute;
