import apiCaller from "../../../api-config/apiCaller";

export const getAllQuizzes = async () => {
  const path = "/exercises/search";
  const result = await apiCaller("POST", path, {});
  return result;
};

export const deleteQuizzes = async (data) => {
  const path = `/exercises/${data.id}`;
  delete data.id;
  const result = await apiCaller("PUT", path, JSON.stringify(data));
  return result;
};

export const createQuiz = async (data) => {
  const path = `/exercises`;
  delete data.id;
  const result = await apiCaller("POST", path, JSON.stringify(data));
  return result;
};

export const getQuiz = async(data) => {
  const path = `/exercises/${data.id}`;
  delete data.id;
  const result = await apiCaller("GET", path, {});
  return result;
}

export const updateQuiz = async (data) => {
  const path = `/exercises/${data.id}`;
  delete data.id;
  const result = await apiCaller("PUT", path, JSON.stringify(data));
  return result;
};