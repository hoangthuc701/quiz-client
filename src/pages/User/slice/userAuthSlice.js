import { createSlice } from "@reduxjs/toolkit";
import { signIn as signInApi, signUp as signUpApi } from "../apis/userAuth";
import { SUCCESS_CODE } from "../../../constants";
import { toast } from "react-toastify";

const initialState = {
  accessToken: null,
  user: null,
};

const userAuthSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setAuth: (state, { payload: { accessToken, user } }) => ({
      ...state,
      accessToken,
      user: {
        ...user,
      },
    }),
    clearAuth: () => ({
      ...initialState,
    }),
    setToken: (state, { payload: { accessToken } }) => ({
      ...state,
      accessToken,
    }),
  },
});

export const { setAuth, clearAuth, setToken } = userAuthSlice.actions;

const saveSessionStorage = ({ accessToken, user }) => {
  sessionStorage.setItem("userAuth", JSON.stringify({ accessToken, user }));
};

export const signOut = () => (dispatch) => {
  sessionStorage.setItem("userAuth", "");
  dispatch(clearAuth());
};

export const fetchSessionStorage = () => (dispatch) => {
  try {
    const userAuth = JSON.parse(sessionStorage.getItem("userAuth"));
    if (userAuth) dispatch(setAuth(userAuth));
  } catch (error) {}
};

export const signIn =
  (loginData, resolve, reject) => async (dispatch, getState) => {
    try {
      const res = await signInApi(loginData);
      if (res.code === SUCCESS_CODE) {
        dispatch(setAuth({ ...res.data }));
        saveSessionStorage(getState().userAuth);
        resolve();
      }
      else {
        toast.error(res.data.message);
        reject();
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

export const signUp = (signUpData) => async (dispatch, getState) => {
  try {
    const res = await signUpApi(signUpData);
    if (res.code === SUCCESS_CODE) {
      toast.success(res.data.message);
    } else {
      toast.error(res.data.message);
    }
  } catch (error) {
    toast.error(error.message);
  }
};

export const getSessionStorage = () => {
  try {
    const userAuth = JSON.parse(sessionStorage.getItem("userAuth"));
    return userAuth;
  } catch (error) {
  }
};

export default userAuthSlice.reducer;
