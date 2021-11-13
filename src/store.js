import { configureStore } from "@reduxjs/toolkit";
import userAuthReducer from "./pages/User/slice/userAuthSlice";
import categoryReducer from "./pages/Admin/slice/categorySlice";
import quizzesReducer from "./pages/Admin/slice/quizzesSlice";
import tagReducer from "./pages/Admin/slice/tagSlice";
import usersReducer from "./pages/Admin/slice/usersSlice";

export default configureStore({
  reducer: {
    userAuth: userAuthReducer,
    category: categoryReducer,
    quizzes: quizzesReducer,
    tag: tagReducer,
    users: usersReducer,
  },
});
