import apiCaller from "../../../api-config/apiCaller";

export const getAllCategory = async () => {
   const path = "/categories";
   const result = await apiCaller("GET", path, {});
   return result;
};
