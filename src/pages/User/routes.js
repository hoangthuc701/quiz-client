import Logout from "./pages/Logout";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import ExamPaper from "./pages/ExamPaper";
import Exam from "./pages/Exam";

const routes = [
   {
      path: "/user",
      exact: true,
      main: () => <Home />,
      requireLogin: false,
   },
   {
      path: "/user/login",
      exact: true,
      main: () => <Login />,
      requireLogin: false,
   },
   {
      path: "/user/register",
      exact: true,
      main: () => <Register />,
      requireLogin: false,
   },
   {
      path: "/user/exam-paper",
      exact: true,
      main: () => <ExamPaper />,
      requireLogin: false,
   },
   {
      path: "/user/exam-paper/:id",
      exact: true,
      main: () => <Exam />,
      requireLogin: false,
   },
   {
      path: "/user/logout",
      exact: true,
      main: () => <Logout />,
      requireLogin: false,
   },
   {
      path: "/user/profile",
      exact: true,
      main: () => <Profile />,
      requireLogin: true,
   },
];

export default routes;
