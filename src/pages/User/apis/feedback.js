import apiCaller from "../../../api-config/apiCaller";

export const addFeedBack = async (data) => {
   const path = "/feedbacks";
   const result = await apiCaller("POST", path, JSON.stringify(data));
   return result;
};
