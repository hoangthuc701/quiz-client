import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Home from './pages/Home';

const routes = [
  {
    path: "/admin/overview",
    exact: true,
    main: () => <Home />,
  },
  {
    path: "/admin/logout",
    exact: true,
    main: () => <Logout />,
  },
  {
    path: "/admin/login",
    exact: true,
    main: () => <Login />,
  },
];

export default routes;
