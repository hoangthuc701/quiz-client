import apiCaller from "../../../api-config/apiCaller";

export const signIn = async ({ email, password }) => {
  const path = "/users/login";
  const data = {
    email,
    password,
  };
  const result = await apiCaller("POST", path, JSON.stringify(data));
  return result;
};

export const signUp = async ({
  email,
  phone,
  password,
  fullname,
  confirmPassword,
}) => {
  const path = "/users/register";
  const data = {
    email,
    password,
    fullname,
    phone,
    confirmPassword,
  };
  const result = await apiCaller("POST", path, JSON.stringify(data));
  return result;
};
