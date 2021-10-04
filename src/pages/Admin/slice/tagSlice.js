import { createSlice } from "@reduxjs/toolkit";

import { toast } from "react-toastify";
import { SUCCESS_CODE } from "../../../constants";
import { tagAPI } from "../api";

const initialState = {
  categories: [],
};

const tagSlice = createSlice({
  name: "tagSlice",
  initialState,
  reducers: {
    setCategories: (state, { payload: { categories } }) => ({
      categories,
    }),
  },
});

export const { setCategories } = tagSlice.actions;

export const getAllTag = () => async (dispatch, getState) => {
  try {
    const res = await tagAPI.getAllTag();
    if (res.code === SUCCESS_CODE) {
      dispatch(setCategories(res.data));
    }
  } catch (error) {}
};

export const updateTag =
  (data, resolve, reject = () => null) =>
  async (dispatch, getState) => {
    try {
      const res = await tagAPI.updateTag(data);
      if (res.code === SUCCESS_CODE) {
        resolve();
        dispatch(getAllTag());
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

export const deleteTag =
  (data, resolve, reject = () => null) =>
  async (dispatch, getState) => {
    try {
      const res = await tagAPI.deleteTag(data);
      if (res.code === SUCCESS_CODE) {
        resolve();
        toast.success("Xóa dữ liệu thành công");
        dispatch(getAllTag());
      } else {
        reject();
      }
    } catch (error) {
      reject();
      toast.error(error.message);
    }
  };

export const addTag =
  (data, resolve, reject = () => null) =>
  async (dispatch, getState) => {
    try {
      const res = await tagAPI.addTag(data);
      if (res.code === SUCCESS_CODE) {
        resolve();
        toast.success(res.data.message);
        dispatch(getAllTag());
      } else {
        reject();
      }
    } catch (error) {
      reject();
      toast.error(error.message);
    }
  };

export default tagSlice.reducer;
