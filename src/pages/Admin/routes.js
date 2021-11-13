import { CREATOR_ROLE_CODE, ADMIN_ROLE_CODE } from "../../constants/index";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Quizz from "./pages/Quizz";
import ViewQuizz from "./pages/Quizz/view";
import EditQuizz from "./pages/Quizz/edit";
import Tag from "./pages/Tag";
import NewQuizz from "./pages/Quizz/new";
import UserManagement from "./pages/User";
import UserView from "./pages/User/view";

const routes = [
  {
    path: "/admin/overview",
    exact: true,
    main: () => <Home />,
    role: [ADMIN_ROLE_CODE, CREATOR_ROLE_CODE]
  },
  {
    path: "/admin/logout",
    exact: true,
    main: () => <Logout />,
    role: [ADMIN_ROLE_CODE]
  },
  {
    path: "/admin/login",
    exact: true,
    main: () => <Login />,
    role: [ADMIN_ROLE_CODE]
  },
  {
    path: "/admin/category",
    exact: true,
    main: () => <Category />,
    role: [ADMIN_ROLE_CODE]
  },
  {
    path: "/admin/quizzes",
    exact: true,
    main: () => <Quizz />,
    role: [CREATOR_ROLE_CODE, ADMIN_ROLE_CODE]
  },
  {
    path: "/admin/quizzes/new",
    exact: true,
    main: () => <NewQuizz />,
    role: [CREATOR_ROLE_CODE, ADMIN_ROLE_CODE]
  },
  {
    path: "/admin/quizzes/:id/view",
    exact: true,
    main: () => <ViewQuizz />,
    role: [CREATOR_ROLE_CODE, ADMIN_ROLE_CODE]
  },
  {
    path: "/admin/quizzes/:id/edit",
    exact: true,
    main: () => <EditQuizz />,
    role: [CREATOR_ROLE_CODE, ADMIN_ROLE_CODE]
  },
  {
    path: "/admin/tag",
    exact: true,
    main: () => <Tag />,
    role: [ADMIN_ROLE_CODE]
  },
  {
    path: "/admin/user",
    exact: true,
    main: () => <UserManagement />,
    role: [ADMIN_ROLE_CODE]
  },
  {
    path: "/admin/user/:userId",
    exact: true,
    main: () => <UserView />,
    role: [ADMIN_ROLE_CODE]
  },
];

export default routes;
