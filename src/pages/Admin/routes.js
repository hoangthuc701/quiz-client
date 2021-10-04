import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Quizz from "./pages/Quizz";
import ViewQuizz from "./pages/Quizz/view";
import EditQuizz from "./pages/Quizz/edit";
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
    path: "/admin/quizzes",
    exact: true,
    main: () => <Quizz />,
  },
  {
    path: "/admin/quizzes/:id/view",
    exact: true,
    main: () => <ViewQuizz />,
  },
  {
    path: "/admin/quizzes/:id/edit",
    exact: true,
    main: () => <EditQuizz />,
  },
  {
    path: "/admin/tag",
    exact: true,
    main: () => <Tag />,
  },
];

export default routes;
