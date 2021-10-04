import apiCaller from "../../../api-config/apiCaller";

export const getAllCategory = async () => {
  const path = "/categories";
  const result = await apiCaller('GET', path, {});
  return result;
};

export const updateCategory = async(data) => {
  const path = `/categories/${data.id}`;
  delete data.id;
  const result = await apiCaller('PUT', path, JSON.stringify(data));
  
  return result;
};

export const deleteCategory = async (data) => {
  const path = `/categories/${data.id}`;
  delete data.id;
  const result = await apiCaller('PUT', path, JSON.stringify(data));

  return result;
};

export const addCategory = async (data) => {
  const path = "/categories";
  delete data.active;
  const result = await apiCaller('POST', path, JSON.stringify(data));
  return result;
};
