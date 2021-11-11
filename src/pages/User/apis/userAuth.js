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

export const forgotPassword = async ({
  email
}) => {
  const path = "/users/forget-password";
  const data = {
    email,
  };
  const result = await apiCaller("POST", path, JSON.stringify(data));
  return result;
};

export const resetPassword = async ({
  token,
  password,
  confirmPassword
}) => {
  const path = "/users/reset-password";
  const data = {
    token,
    password,
    confirmPassword,
  };
  const result = await apiCaller("POST", path, JSON.stringify(data));
  return result;
};

export const updatePassword = async ({
  oldPassword,
  password,
  confirmPassword
}) => {
  const path = "/users/update-password";
  const data = {
    oldPassword,
    password,
    confirmPassword,
  };
  const result = await apiCaller("POST", path, JSON.stringify(data));
  return result;
};

export const updateUserInformation = async ({
  fullname,
  phone,
  email
}) => {
  const path = "/users/update-own-info";
  const data = {
    fullname,
    phone,
    email
  };
  const result = await apiCaller("PUT", path, JSON.stringify(data));
  return result;
};

export const getUserInformation = async () => {
  const path = "/users/own-info";
  const result = await apiCaller("GET", path);
  return result;
};