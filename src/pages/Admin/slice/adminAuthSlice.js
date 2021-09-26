import { createSlice } from "@reduxjs/toolkit";
import { signIn as CallSignInApi } from "../api/adminAuth";

const initialState = {
  token: null,
  user: null,
  loading: false,
  role: "admin",
};

export const adminAuthSlice = createSlice({
  name: "lading",
  initialState,
  reducers: {
    setLoading: (state, { payload }) => ({
      ...state,
      loading: payload,
    }),
    setAuth: (state, { payload: { token, user } }) => ({
      ...state,
      token,
      user: {
        ...user,
      },
    }),
    clearAuth: () => ({
      ...initialState,
      ready: true,
    }),
  },
});

export const { setAuth, clearAuth, setLoading } = adminAuthSlice.actions;

export const signIn =
  (username, password, setError = () => {}) =>
  async (dispatch) => {
    try {
      setError(null);
      dispatch(setLoading(true));
      const res = await CallSignInApi(username, password);
      sessionStorage.setItem("adminAuth", JSON.stringify({ ...res.data }));
      dispatch(setAuth({ ...res.data }));
    } catch ({ response }) {
      setError(
        "The credentials you supplied were not correct or did not grant access to this resource"
      );
    } finally {
      dispatch(setLoading(false));
    }
  };

export const getSessionStorage = () => {
  try {
    const adminAuth = JSON.parse(sessionStorage.getItem("adminAuth"));
    return adminAuth;
  } catch (error) {
    console.log(error);
  }
};

export const fetchSessionStorage = () => (dispatch) => {
  try {
    const adminAuth = JSON.parse(sessionStorage.getItem("adminAuth"));
    if (adminAuth) dispatch(setAuth(adminAuth));
  } catch (error) {
    //
  }
};

export const signOut = () => (dispatch) => {
  sessionStorage.setItem("adminAuth", "");
  dispatch(clearAuth());
};

export default adminAuthSlice.reducer;
