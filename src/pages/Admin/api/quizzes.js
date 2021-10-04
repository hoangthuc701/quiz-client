import apiCaller from "../../../api-config/apiCaller";

export const getAllQuizzes = async () => {
  const path = "/exercises/search";
  const result = await apiCaller('POST', path, {});
  return result;
};

export const deleteQuizzes = async (data) => {
    const path = "/exercises/search";
    const result = await apiCaller('PUT', path, JSON.stringify(data));
    return result;
  };
  