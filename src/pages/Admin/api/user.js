import apiCaller from "../../../api-config/apiCaller";

export const getAllUser = async () => {
  const path = "/users/admin/search";
  const data = {
      limit: 1000,
      offset: 0,
  }
  const result = await apiCaller("POST", path, JSON.stringify(data));
  return result;
};


export const updateUser = async(data) => {
    const path = `/users/admin/update/${data.id}`;
    delete data.id;
    delete data.email;
    delete data.role;
    const result = await apiCaller('PUT', path, JSON.stringify(data));
    
    return result;
  };

  export const getUser = async (data) => {
    const path = `/users/admin/get-one/${data.id}`;
    const result = await apiCaller('GET', path, {});
  
    return result;
  };