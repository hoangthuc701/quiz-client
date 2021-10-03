import { configureStore } from "@reduxjs/toolkit";
import userAuthReducer from "./pages/User/slice/userAuthSlice";
import categoryReducer from "./pages/Admin/slice/categorySlice";

export default configureStore({
  reducer: {
    userAuth: userAuthReducer,
    category: categoryReducer,
  },
});
