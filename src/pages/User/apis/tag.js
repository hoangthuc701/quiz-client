import apiCaller from "../../../api-config/apiCaller";

export const getAllTag = async () => {
   const path = "/tags";
   //   const result = await apiCaller("POST", path, JSON.stringify(data), null);
   const result = new Promise((resolve) => {
      resolve({
         code: 1000,
         data: {
            categories: [
               {
                  id: 1,
                  title: "OOP",
                  description:
                     "Các bài tập về phương pháp lập trình hướng đối tượng.",
                  active: true,
               },
               {
                  id: 2,
                  title: "Spring",
                  description: "Các bài tập về Java framework Spring.",
                  active: true,
               },
               {
                  id: 3,
                  title: "FrontEnd",
                  description: "Các bài tập về Front End",
                  active: true,
               },
            ],
         },
      });
   });
   return result;
};
