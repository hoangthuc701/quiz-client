import apiCaller from "../../../api-config/apiCaller";

export const getAllTag = async () => {
   const path = "/tags";
   const result = await apiCaller("GET", path, {});
   return result;
};
