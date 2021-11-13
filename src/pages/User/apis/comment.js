import apiCaller from "../../../api-config/apiCaller";

export const getAllByExercise = async (exerciseId) => {
   const path = "/comments/search";
   const result = await apiCaller("POST", path, { exerciseId });
   return result;
};

export const addComment = async (data) => {
   const path = "/comments";
   const result = await apiCaller("POST", path, JSON.stringify(data));
   return result;
};
