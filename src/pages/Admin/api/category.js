import apiCaller from "../../../api-config/apiCaller";

export const getAllCategory = async () => {
  const path = "";
  //   const result = await apiCaller('GET', path, JSON.stringify(data));

  const result = new Promise((resolve) => {
    resolve({
      code: 1000,
      data: {
        categories: [
          {
            key: "1",
            name: "Live stream",
            description: "Các live stream chửi nhau cho thu hút",
            creator: {
              id: "1",
              fullname: "CEO Nguyễn Phương Hằng",
            },
          },
          {
            key: "2",
            name: "Học làm lươn",
            description: "Học cách lươn lẹo",
            creator: {
              id: "1",
              fullname: "....",
            },
          },
        ],
      },
    });
  });
  return result;
};

export const updateCategory = (data) => {
  const path = "/get/category/login";
  //   const result = await apiCaller('PATCH', path, JSON.stringify(data));
  const result = {
    code: 1000,
    data: {
      message: "Cập nhật thành công",
    },
  };

  return result;
};

export const deleteCategory = (data) => {
  const path = "";
  //   const result = await apiCaller('DELETE', path, JSON.stringify(data));
  const result = {
    code: 1000,
    data: {
      message: "Xóa thành công",
    },
  };

  return result;
};

export const addCategory = (data) => {
  const path = "";
  //   const result = await apiCaller('POST', path, JSON.stringify(data));
  const result = {
    code: 1000,
    data: {
      message: "Thêm mới thành công",
    },
  };

  return result;
};
