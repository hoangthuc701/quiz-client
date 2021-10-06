import apiCaller from "../../../api-config/apiCaller";

export const deleteQuestion = async (data) => {
  const path = `/questions/${data.id}`;
  delete data.id;
  const result = await apiCaller("DELETE", path, {});
  return result;
};

export const createQuestion = async (data) => {
  const path = `/questions`;
  delete data.id;
  const result = await apiCaller("POST", path, JSON.stringify(data));
  return result;
};

export const updateQuestion = async (data) => {
  const path = `/questions/${data.questionId}`;
  delete data.questionId;
  delete data.id;
  delete data.no;
  const result = await apiCaller("PUT", path, JSON.stringify(data));
  return result;
};
