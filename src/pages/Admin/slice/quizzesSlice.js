import { createSlice } from "@reduxjs/toolkit";
import {
  getAllQuizzes as getAllQuizzesApi,
  deleteQuizzes as deleteQuizzesApi,
  getQuiz as getQuizApi,
} from "../api/quizzes";
import { SUCCESS_CODE } from "../../../constants";
import { quizAPI } from "../api";
import { toast } from "react-toastify";

const initialState = {
  exercises: [],
};

const quizzesSlice = createSlice({
  name: "quizzesSlice",
  initialState,
  reducers: {
    setQuizzes: (state, { payload: { exercises } }) => ({
      ...state,
      exercises,
    }),
    setQuiz: (state, { payload: { exercise } }) => ({
      ...state,
      exercise,
    }),
  },
});

export const { setQuizzes, setQuiz } = quizzesSlice.actions;

export const getAllQuizzes = () => async (dispatch, getState) => {
  try {
    const res = await getAllQuizzesApi();
    if (res.code === SUCCESS_CODE) {
      dispatch(setQuizzes(res.data));
    }
  } catch (error) {}
};

export const deleteQuizzes =
  (data, resolve, reject) => async (dispatch, getState) => {
    try {
      const res = await deleteQuizzesApi(data);
      if (res.code === SUCCESS_CODE) {
        dispatch(getAllQuizzes());
        resolve();
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

export const createQuiz =
  (data, resolve, reject) => async (dispatch, getState) => {
    try {
      const res = await quizAPI.createQuiz(data);
      if (res.code === SUCCESS_CODE) {
        dispatch(getAllQuizzes());
      } else {
        toast.error(res.message);
        reject?.();
      }
      resolve?.();
    } catch (error) {
      toast.error(error.message);
      reject?.();
    }
  };

export const getQuiz =
  (data, resolve, reject) => async (dispatch, getState) => {
    try {
      const res = await getQuizApi(data);
      if (res.code === SUCCESS_CODE) {
        dispatch(setQuiz(res.data));
      } else {
        toast.error(res.message);
        reject?.();
      }
      resolve?.();
    } catch (error) {
      toast.error(error.message);
      reject?.();
    }
  };

export const updateQuiz =
  (data, resolve, reject) => async (dispatch, getState) => {
    try {
      const res = await quizAPI.updateQuiz(data);
      if (res.code === SUCCESS_CODE) {
        resolve?.();
      } else {
        toast.error(res.message);
        reject?.();
      }
    } catch (error) {
      toast.error(error.message);
      reject?.();
    }
  };

export default quizzesSlice.reducer;
