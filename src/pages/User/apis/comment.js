import apiCaller from "../../../api-config/apiCaller";

export const getAllByExercise = async (idExercise) => {
   const path = "/comments";
   const data = {
      idExercise,
   };
   //   const result = await apiCaller("POST", path, JSON.stringify(data), null);
   const result = new Promise((resolve) => {
      resolve({
         code: 1000,
         data: {
            comments: [
               {
                  id: 1,
                  exercies: 2,
                  user: {
                     id: 1,
                     name: "Louis Phan",
                  },
                  content: "Good!",
               },
               {
                  id: 2,
                  exercies: 2,
                  user: {
                     id: 1,
                     name: "Louis Huỳnh",
                  },
                  content: "This Exam Very Good!",
               },
            ],
         },
      });
   });
   return result;
};
