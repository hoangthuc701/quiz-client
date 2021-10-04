import { createSlice } from "@reduxjs/toolkit";
import {
  getAllCategory as getAllCategoryApi,
  deleteCategory as deleteCategoryApi,
  updateCategory as updateCategoryApi,
  addCategory as addCategoryApi,
} from "../api/category";
import { toast } from "react-toastify";
import { SUCCESS_CODE } from "../../../constants";

const initialState = {
  categories: [],
};

const categorySlice = createSlice({
  name: "categorySlice",
  initialState,
  reducers: {
    setCategories: (state, { payload: { categories } }) => ({
      categories,
    }),
  },
});

export const { setCategories } = categorySlice.actions;

export const getAllCategory = () => async (dispatch, getState) => {
  try {
    const res = await getAllCategoryApi();
    if (res.code === SUCCESS_CODE) {
      dispatch(setCategories(res.data));
    }
  } catch (error) {}
};

export const updateCategory = (data, resolve, reject) => async (dispatch, getState) => {
  try {
    const res = await updateCategoryApi(data);
    if (res.code === SUCCESS_CODE) {
      resolve();
      dispatch(getAllCategory());
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

export const deleteCategory = (data, resolve, reject) => async (dispatch, getState) => {
  try {
    const res = await deleteCategoryApi(data);
    if (res.code === SUCCESS_CODE) {
      resolve();
      toast.success("Xóa dữ liệu thành công");
      dispatch(getAllCategory());
    } else 
    {
      reject();
    }
  } catch (error) {
    reject();
    toast.error(error.message);
  }
};

export const addCategory = (data, resolve, reject) => async (dispatch, getState) => {
  try {
    const res = await addCategoryApi(data);
    if (res.code === SUCCESS_CODE) {
      resolve();
      toast.success(res.data.message);
      dispatch(getAllCategory());
    } else 
    {
      reject();
    }
  } catch (error) {
    reject();
    toast.error(error.message);
  }
};

export default categorySlice.reducer;
