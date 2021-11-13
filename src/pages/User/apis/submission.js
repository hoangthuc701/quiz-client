import apiCaller from "../../../api-config/apiCaller";

export const startSubmit = async (data) => {
   const path = "/submissions/start";
   const result = await apiCaller("POST", path, JSON.stringify(data));
   return result;
};

export const submit = async (data) => {
   const path = "/submissions/submit";
   const result = await apiCaller("POST", path, JSON.stringify(data));
   return result;
};
