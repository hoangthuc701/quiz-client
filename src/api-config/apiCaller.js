import axios from "axios";

const apiCaller = (method = "GET", path, data, token) => {
  return axios({
    method,
    url: `${process.env.REACT_APP_API_URL}${path}`,
    data,
    headers: token
      ? {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        }
      : {
          "Content-Type": "application/json",
        },
  });
};

export default apiCaller;
