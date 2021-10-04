import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Tag from "./pages/Tag";

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
  {
    path: "/admin/category",
    exact: true,
    main: () => <Category />,
  },
  {
    path: "/admin/tag",
    exact: true,
    main: () => <Tag />,
  },
];

export default routes;
