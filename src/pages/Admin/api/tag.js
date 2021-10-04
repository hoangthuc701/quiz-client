import apiCaller from "../../../api-config/apiCaller";

export const getAllTag = async () => {
  const path = "/tags";
  const result = await apiCaller("GET", path, {});
  return result;
};

export const updateTag = async (data) => {
  const path = `/tags/${data.id}`;
  delete data.id;
  const result = await apiCaller("PUT", path, JSON.stringify(data));

  return result;
};

export const deleteTag = async (data) => {
  const path = `/tags/${data.id}`;
  delete data.id;
  const result = await apiCaller("PUT", path, JSON.stringify(data));

  return result;
};

export const addTag = async (data) => {
  const path = "/tags";
  delete data.active;
  delete data.id;
  const result = await apiCaller("POST", path, JSON.stringify(data));
  return result;
};
