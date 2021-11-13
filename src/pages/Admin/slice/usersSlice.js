import { createSlice } from "@reduxjs/toolkit";
import {
  getAllUser as getAllUserApi,
  updateUser as updateUserApi,
  getUser as getUserApi
} from "../api/user";
import { toast } from "react-toastify";
import { SUCCESS_CODE } from "../../../constants";

const initialState = {
  users: [],
};

const usersSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setUsers: (state, { payload: { users } }) => ({
      users,
    }),
  },
});

export const { setUsers } = usersSlice.actions;

export const getAllUser = () => async (dispatch, getState) => {
  try {
    const res = await getAllUserApi();
    if (res.code === SUCCESS_CODE) {
      dispatch(setUsers(res.data));
    }
  } catch (error) {}
};

export const updateUserInformation =
  (data, resolve, reject) => async (dispatch, getState) => {
    try {
      const res = await updateUserApi(data);
      if (res.code === SUCCESS_CODE) {
        resolve();
        dispatch(getAllUser());
        toast.success(res.data.message);
      } else {
        toast.error(res.message);
        reject();
      }
    } catch (error) {
      toast.error(error.message);
      reject();
    }
  };

export const getUser =
  (data, resolve, reject) => async (dispatch, getState) => {
    try {
      const res = await getUserApi(data);
      if (res.code === SUCCESS_CODE) {
        resolve(res.data);
      } else {
        toast.error(res.message);
        reject();
      }
    } catch (error) {
      toast.error(error.message);
      reject();
    }
  };

export default usersSlice.reducer;
