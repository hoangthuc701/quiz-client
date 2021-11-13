import apiCaller from "../../../api-config/apiCaller";

export const getAllExercises = async () => {
  const path = "/exercises/search";
  const result = await apiCaller("POST", path, {});
  return result;
};

export const getAllByCategory = async (categoryId) => {
  const path = "/exercises/search";
  const result = await apiCaller("POST", path, {
    categoryIdList: [categoryId],
  });
  return result;
};

export const getAllByTag = async (tagId) => {
  const path = "/exercises/search";
  const result = await apiCaller("POST", path, {
    tagIdList: [tagId],
  });
  return result;
};

export const getById = async (id) => {
  const path = `/exercises/${id}`;
  const result = await apiCaller("GET", path, {});
  return result;
};

export const getAllExercisesHistory = async () => {
  const path = "/submissions/search";
  const result = await apiCaller("POST", path, {});
  return result;
};

export const getHistoryById = async (id) => {
  const path = "/submissions/search";
  const result = await apiCaller("POST", path, {});

  return {
    data: {
      exercise: result.data.submissionList.filter(
        (i) => i.id === parseInt(id)
      )?.[0],
    },
  };
};
