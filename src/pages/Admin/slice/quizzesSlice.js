import { createSlice } from "@reduxjs/toolkit";
import {
  getAllQuizzes as getAllQuizzesApi,
  deleteQuizzes as deleteQuizzesApi,
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
      exercises,
    }),
  },
});

export const { setQuizzes } = quizzesSlice.actions;

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
      }
      else 
      {
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

export default quizzesSlice.reducer;
