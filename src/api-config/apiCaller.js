import axios from "axios";

axios.interceptors.request.use((req) => {
  const userAuth = JSON.parse(sessionStorage.getItem("userAuth"));

  const token = userAuth.accessToken;

  if (token) {
    req.headers = {
      "Content-Type": "application/json",
      Authorization: `${token}`,
    };
  } else {
    req.headers = {
      "Content-Type": "application/json",
    };
  }
  return req;
});

axios.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    if (error.response && error.response.data) {
      return Promise.reject(error.response.data);
    }
    return Promise.reject(error.message);
  }
);

const apiCaller = (method = "GET", path, data) => {
  return axios({
    method,
    url: `${process.env.REACT_APP_API_URL}${path}`,
    data,
  });
};

export default apiCaller;
