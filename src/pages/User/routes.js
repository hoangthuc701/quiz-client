import Logout from "./pages/Logout";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import ExamPaper from "./pages/ExamPaper";
import Exam from "./pages/Exam";
import HistoryExamPaper from "./pages/HistoryExamPaper";
import HistoryExam from "./pages/HistoryExam";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";

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
      path: "/user/exam-history",
      exact: true,
      main: () => <HistoryExamPaper />,
      requireLogin: false,
   },
   {
      path: "/user/exam-history/:id",
      exact: true,
      main: () => <HistoryExam />,
      requireLogin: false,
   },
   {
      path: "/user/exam-paper/category/:categoryId",
      exact: true,
      main: () => <ExamPaper />,
      requireLogin: false,
   },
   {
      path: "/user/exam-paper/tag/:tagId",
      exact: true,
      main: () => <ExamPaper />,
      requireLogin: false,
   },
   {
      path: "/user/exam/:id",
      exact: true,
      main: () => <Exam />,
      requireLogin: true,
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
   {
      path: "/user/forgot-password",
      exact: true,
      requireLogin: false,
      main: ()=> <ForgotPassword />
   },
   {
      path: "/user/reset-password",
      exact: true,
      requireLogin: false,
      main: ()=> <ResetPassword />
   }
];

export default routes;
