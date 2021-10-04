import { createSlice } from "@reduxjs/toolkit";
import {
  getAllQuizzes as getAllQuizzesApi,
  deleteQuizzes as deleteQuizzesApi,
} from "../api/quizzes";
import { SUCCESS_CODE } from "../../../constants";

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

export const deleteQuizzes = (data, resolve, reject) => async (dispatch, getState) => {
  try {
    const res = await deleteQuizzesApi(data);
    if (res.code === SUCCESS_CODE) {
      dispatch(getAllQuizzes());
    }
  } catch (error) {}
};

export default quizzesSlice.reducer;
