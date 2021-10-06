import apiCaller from "../../../api-config/apiCaller";

export const getAllCategory = async () => {
   const path = "/categories";
   //   const result = await apiCaller("POST", path, JSON.stringify(data), null);
   const result = new Promise((resolve) => {
      resolve({
         code: 1000,
         data: {
            categories: [
               {
                  id: 1,
                  title: "Java",
                  description: "Các bài tập về ngôn ngữ lập trình Java",
                  active: true,
               },
               {
                  id: 7,
                  title: "C#",
                  description: "Các bài tập về ngôn ngữ C#",
                  active: true,
               },
               {
                  id: 8,
                  title: "PyThon",
                  description: "Các bài tập về ngôn ngữ Python",
                  active: true,
               },
               {
                  id: 9,
                  title: "Reactjs",
                  description: "Các bài tập về FrameWork Reactjs",
                  active: true,
               },
               {
                  id: 10,
                  title: "Angular",
                  description: "Các bài tập về FrameWork Angular",
                  active: true,
               },
            ],
         },
      });
   });
   return result;
};
