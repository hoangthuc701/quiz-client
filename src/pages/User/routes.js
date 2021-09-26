import Logout from "./pages/Logout";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";

const routes = [
  {
    path: "/user",
    exact: true,
    main: () => <Home />,
  },
  {
    path: "/user/login",
    exact: true,
    main: () => <Login />,
  },
  {
    path: "/user/register",
    exact: true,
    main: () => <Register />,
  },
  {
    path: "/user/logout",
    exact: true,
    main: () => <Logout />,
  },
];

export default routes;
