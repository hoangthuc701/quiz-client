import { configureStore } from "@reduxjs/toolkit";
import userAuthReducer from "./pages/User/slice/userAuthSlice";

export default configureStore({
  reducer: {
    userAuth: userAuthReducer,
  },
});
