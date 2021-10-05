import apiCaller from "../../../api-config/apiCaller";

export const getAllQuizzes = async () => {
  const path = "/exercises/search";
  const result = await apiCaller("POST", path, {});
  return result;
};

export const deleteQuizzes = async (data) => {
  const path = `/exercises/${data.id}`;
  data.categoryId = data.category.id;
  data.tagIdList = data.tags.map(tag=> tag.id);
  delete data.id;
  delete data.category;
  delete data.createdUser;
  delete data.tags;
  const result = await apiCaller("PUT", path, JSON.stringify(data));
  return result;
};

export const createQuiz = async (data) => {
  const path = `/exercises`;
  delete data.id;
  const result = await apiCaller("POST", path, JSON.stringify(data));
  return result;
};
