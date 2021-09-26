import React from "react";
import { Redirect } from 'react-router-dom';
import UserContainer from "./pages/User/UserContainer";
import AdminContainer from "./pages/Admin/AdminContainer";
import AdminLogin from "./pages/Admin/pages/Login";
import Error from "./pages/Error";

const routes = [
  {
    path: "/admin/login",
    exact: true,
    main: () => <AdminLogin />,
  },
  {
    path: "/admin",
    exact: false,
    main: () => <AdminContainer />,
  },
  {
    path: "/user",
    exact: false,
    main: () => <UserContainer />,
  },
  {
    path: "/",
    exact: true,
    main: () => <Redirect to="/user" />,
  },
  {
    path: "/404",
    exact: true,
    main: () => <Error />,
  },
];

export default routes;
