import {
  createQuestion as createQuestionApi,
  deleteQuestion as deleteQuestionApi,
  updateQuestion as updateQuestionApi,
} from "../api/question";
import { SUCCESS_CODE } from "../../../constants";
import { toast } from "react-toastify";

export const createQuestion =
  (data, resolve, reject) => async (dispatch, getState) => {
    try {
      const res = await createQuestionApi(data);
      if (res.code === SUCCESS_CODE) {
        resolve?.(res.data);
      } else {
        toast.error(res.message);
        reject?.();
      }
    } catch (error) {
      toast.error(error.message);
      reject?.();
    }
  };

export const updateQuestion =
  (data, resolve, reject) => async (dispatch, getState) => {
    try {
      const res = await updateQuestionApi(data);
      if (res.code === SUCCESS_CODE) {
        resolve?.();
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

export const deleteQuestion =
  (data, resolve, reject) => async (dispatch, getState) => {
    try {
      const res = await deleteQuestionApi(data);
      if (res.code === SUCCESS_CODE) {
        resolve?.();
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
