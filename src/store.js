import { configureStore } from "@reduxjs/toolkit";
import userAuthReducer from "./pages/User/slice/userAuthSlice";
import categoryReducer from "./pages/Admin/slice/categorySlice";
import quizzesReducer from "./pages/Admin/slice/quizzesSlice";

export default configureStore({
  reducer: {
    userAuth: userAuthReducer,
    category: categoryReducer,
    quizzes: quizzesReducer,
  },
});
