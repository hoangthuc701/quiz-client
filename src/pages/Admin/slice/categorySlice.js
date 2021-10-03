import { createSlice } from "@reduxjs/toolkit";
import {
  getAllCategory as getAllCategoryApi,
  deleteCategory as deleteCategoryApi,
  updateCategory as updateCategoryApi,
  addCategory as addCategoryApi,
} from "../api/category";
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

export const updateCategory = (data, resolve) => async (dispatch, getState) => {
  try {
    const res = await updateCategoryApi(data);
    if (res.code === SUCCESS_CODE) {
      resolve();
      dispatch(getAllCategory());
    }
  } catch (error) {}
};

export const deleteCategory = (data) => async (dispatch, getState) => {
  try {
    const res = await deleteCategoryApi(data);
    if (res.code === SUCCESS_CODE) {
      dispatch(getAllCategory());
    }
  } catch (error) {}
};

export const addCategory = (data, resolve) => async (dispatch, getState) => {
  try {
    const res = await addCategoryApi(data);
    if (res.code === SUCCESS_CODE) {
      resolve();
      dispatch(getAllCategory());
    }
  } catch (error) {}
};

export default categorySlice.reducer;
