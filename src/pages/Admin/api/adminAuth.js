import apiCaller from '../../../api-config/apiCaller';

export const signIn = async (username, password) => {
  const path = '/admin/auth/login';
  const data = {
    username,
    password,
  };
  const result = await apiCaller('POST', path, JSON.stringify(data));
  return result;
};

export const signOut = async () => {
  return 0;
};