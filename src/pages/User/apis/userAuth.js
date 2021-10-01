import apiCaller from "../../../api-config/apiCaller";

export const signIn = async ({ username, password }) => {
  const path = "/api/user/auth/login";
  const data = {
    username,
    password,
  };
  //   const result = await apiCaller("POST", path, JSON.stringify(data), null);
  const result = new Promise((resolve) => {
    resolve({
      code: 1000,
      data: {
        message: "Đăng nhập thành công.",
        accessToken: "askdjasljdk",
        user: {
          id: 1,
          email: "louis.phhh@gmail.com",
          fullname: "Louis Phan",
          phone: "0123456789",
          role: 1,
        },
      },
    });
  });
  return result;
};

export const signUp = async ({ username, password, fullname }) => {
  const path = "/api/user/auth/register";
  const data = {
    username,
    password,
    fullname,
  };
  //   const result = await apiCaller("POST", path, JSON.stringify(data), null);
  const result = new Promise((resolve) => {
    resolve({
      code: 1000,
      data: {
        message: "Đăng kí thành công.",
        user: {
          id: 1,
          email: "louis.phhh@gmail.com",
          fullname: "Louis Phan",
          phone: "0123456789",
        },
      },
    });
  });
  return result;
};
