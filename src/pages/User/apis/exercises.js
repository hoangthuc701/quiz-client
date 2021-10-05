import apiCaller from "../../../api-config/apiCaller";

export const getAllExercises = async () => {
   const path = "/exercises";
   //   const result = await apiCaller("POST", path, JSON.stringify(data), null);
   const result = new Promise((resolve) => {
      resolve({
         code: 1000,
         data: {
            message: "Lấy thông tin đề thi thành công.",
            exercises: [
               {
                  id: 1,
                  title: "Bài trắc nghiệp về ngôn ngữ Java",
                  description:
                     "Bài trắc nghiệp về ngôn ngữ Java cho người mới học.",
                  duration: 30,
                  category: {
                     id: 1,
                     title: "Java",
                     description: "Các bài tập về ngôn ngữ lập trình Java",
                  },
                  createdUser: {
                     id: 1,
                     email: "louis.phhh@gmail.com",
                  },
                  questions: [
                     {
                        id: 1,
                        no: 1,
                        content: "Câu hỏi 1 test?",
                        correctAnswer: 1,
                        answer1: "Đáp án 1 - Câu 1",
                        answer2: "Đáp án 2 - Câu 1",
                        answer3: "Đáp án 3 - Câu 1",
                        answer4: "Đáp án 4 - Câu 1",
                     },
                     {
                        id: 2,
                        no: 2,
                        content: "Câu hỏi 2 test?",
                        correctAnswer: 3,
                        answer1: "Đáp án 1 - Câu 2",
                        answer2: "Đáp án 2 - Câu 2",
                        answer3: "Đáp án 3 - Câu 2",
                        answer4: "Đáp án 4 - Câu 2",
                     },
                  ],
                  tags: [
                     {
                        id: 1,
                        title: "OOP",
                        description:
                           "Các bài tập về phương pháp lập trình hướng đối tượng.",
                     },
                     {
                        id: 2,
                        title: "Spring",
                        description: "Các bài tập về Java framework Spring.",
                     },
                  ],
               },
               {
                  id: 2,
                  title: "Bài trắc nghiệp Reactjs",
                  description: "Bài trắc nghiệp về FrameWord Reactjs.",
                  duration: 30,
                  category: {
                     id: 9,
                     title: "Reactjs",
                     description: "Các bài tập về FrameWork Reactjs",
                  },
                  createdUser: {
                     id: 1,
                     email: "louis.phhh@gmail.com",
                  },
                  questions: [
                     {
                        id: 1,
                        no: 1,
                        content: "Câu hỏi 1 test?",
                        correctAnswer: 1,
                        answer1: "Đáp án 1 - Câu 1",
                        answer2: "Đáp án 2 - Câu 1",
                        answer3: "Đáp án 3 - Câu 1",
                        answer4: "Đáp án 4 - Câu 1",
                     },
                     {
                        id: 2,
                        no: 2,
                        content: "Câu hỏi 2 test?",
                        correctAnswer: 3,
                        answer1: "Đáp án 1 - Câu 2",
                        answer2: "Đáp án 2 - Câu 2",
                        answer3: "Đáp án 3 - Câu 2",
                        answer4: "Đáp án 4 - Câu 2",
                     },
                  ],
                  tags: [
                     {
                        id: 3,
                        title: "FrontEnd",
                        description: "Các bài tập về Front End",
                     },
                  ],
               },
            ],
         },
      });
   });
   return result;
};

export const getAllByCategory = async ({ categoryId }) => {
   const path = "/exercises";
   const data = {
      categoryId,
   };
   //   const result = await apiCaller("POST", path, JSON.stringify(data), null);
   const result = new Promise((resolve) => {
      resolve({
         code: 1000,
         data: {
            message: "Lấy thông tin đề thi thành công.",
            exercises: [
               {
                  id: 2,
                  title: "Bài trắc nghiệp Reactjs",
                  description: "Bài trắc nghiệp về FrameWord Reactjs.",
                  duration: 30,
                  category: {
                     id: 9,
                     title: "Reactjs",
                     description: "Các bài tập về FrameWork Reactjs",
                  },
                  createdUser: {
                     id: 1,
                     email: "louis.phhh@gmail.com",
                  },
                  questions: [
                     {
                        id: 1,
                        no: 1,
                        content: "Câu hỏi 1 test?",
                        correctAnswer: 1,
                        answer1: "Đáp án 1 - Câu 1",
                        answer2: "Đáp án 2 - Câu 1",
                        answer3: "Đáp án 3 - Câu 1",
                        answer4: "Đáp án 4 - Câu 1",
                     },
                     {
                        id: 2,
                        no: 2,
                        content: "Câu hỏi 2 test?",
                        correctAnswer: 3,
                        answer1: "Đáp án 1 - Câu 2",
                        answer2: "Đáp án 2 - Câu 2",
                        answer3: "Đáp án 3 - Câu 2",
                        answer4: "Đáp án 4 - Câu 2",
                     },
                  ],
                  tags: [
                     {
                        id: 3,
                        title: "FrontEnd",
                        description: "Các bài tập về Front End",
                     },
                  ],
               },
            ],
         },
      });
   });
   return result;
};

export const getAllByTag = async ({ tagId }) => {
   const path = "/exercises";
   const data = {
      tagId,
   };
   //   const result = await apiCaller("POST", path, JSON.stringify(data), null);
   const result = new Promise((resolve) => {
      resolve({
         code: 1000,
         data: {
            message: "Lấy thông tin đề thi thành công.",
            exercises: [
               {
                  id: 1,
                  title: "Bài trắc nghiệp về ngôn ngữ Java",
                  description:
                     "Bài trắc nghiệp về ngôn ngữ Java cho người mới học.",
                  duration: 30,
                  category: {
                     id: 1,
                     title: "Java",
                     description: "Các bài tập về ngôn ngữ lập trình Java",
                  },
                  createdUser: {
                     id: 1,
                     email: "louis.phhh@gmail.com",
                  },
                  questions: [
                     {
                        id: 1,
                        no: 1,
                        content: "Câu hỏi 1 test?",
                        correctAnswer: 1,
                        answer1: "Đáp án 1 - Câu 1",
                        answer2: "Đáp án 2 - Câu 1",
                        answer3: "Đáp án 3 - Câu 1",
                        answer4: "Đáp án 4 - Câu 1",
                     },
                     {
                        id: 2,
                        no: 2,
                        content: "Câu hỏi 2 test?",
                        correctAnswer: 3,
                        answer1: "Đáp án 1 - Câu 2",
                        answer2: "Đáp án 2 - Câu 2",
                        answer3: "Đáp án 3 - Câu 2",
                        answer4: "Đáp án 4 - Câu 2",
                     },
                  ],
                  tags: [
                     {
                        id: 1,
                        title: "OOP",
                        description:
                           "Các bài tập về phương pháp lập trình hướng đối tượng.",
                     },
                     {
                        id: 2,
                        title: "Spring",
                        description: "Các bài tập về Java framework Spring.",
                     },
                  ],
               },
               {
                  id: 2,
                  title: "Bài trắc nghiệp Reactjs",
                  description: "Bài trắc nghiệp về FrameWord Reactjs.",
                  duration: 30,
                  category: {
                     id: 9,
                     title: "Reactjs",
                     description: "Các bài tập về FrameWork Reactjs",
                  },
                  createdUser: {
                     id: 1,
                     email: "louis.phhh@gmail.com",
                  },
                  questions: [
                     {
                        id: 1,
                        no: 1,
                        content: "Câu hỏi 1 test?",
                        correctAnswer: 1,
                        answer1: "Đáp án 1 - Câu 1",
                        answer2: "Đáp án 2 - Câu 1",
                        answer3: "Đáp án 3 - Câu 1",
                        answer4: "Đáp án 4 - Câu 1",
                     },
                     {
                        id: 2,
                        no: 2,
                        content: "Câu hỏi 2 test?",
                        correctAnswer: 3,
                        answer1: "Đáp án 1 - Câu 2",
                        answer2: "Đáp án 2 - Câu 2",
                        answer3: "Đáp án 3 - Câu 2",
                        answer4: "Đáp án 4 - Câu 2",
                     },
                  ],
                  tags: [
                     {
                        id: 3,
                        title: "FrontEnd",
                        description: "Các bài tập về Front End",
                     },
                  ],
               },
            ],
         },
      });
   });
   return result;
};

export const getById = async () => {
   const path = "/exercises";
   //   const result = await apiCaller("POST", path, JSON.stringify(data), null);
   const result = new Promise((resolve) => {
      resolve({
         code: 1000,
         data: {
            message: "Lấy thông tin đề thi thành công.",
            exercise: {
               id: 2,
               title: "Bài trắc nghiệp Reactjs",
               description: "Bài trắc nghiệp về FrameWord Reactjs.",
               duration: 30,
               category: {
                  id: 9,
                  title: "Reactjs",
                  description: "Các bài tập về FrameWork Reactjs",
               },
               createdUser: {
                  id: 1,
                  email: "louis.phhh@gmail.com",
               },
               questions: [
                  {
                     id: 1,
                     no: 1,
                     content: "Câu hỏi 1 test?",
                     correctAnswer: 1,
                     answer1: "Đáp án 1 - Câu 1",
                     answer2: "Đáp án 2 - Câu 1",
                     answer3: "Đáp án 3 - Câu 1",
                     answer4: "Đáp án 4 - Câu 1",
                  },
                  {
                     id: 2,
                     no: 2,
                     content: "Câu hỏi 2 test?",
                     correctAnswer: 3,
                     answer1: "Đáp án 1 - Câu 2",
                     answer2: "Đáp án 2 - Câu 2",
                     answer3: "Đáp án 3 - Câu 2",
                     answer4: "Đáp án 4 - Câu 2",
                  },
               ],
               tags: [
                  {
                     id: 3,
                     title: "FrontEnd",
                     description: "Các bài tập về Front End",
                  },
               ],
            },
         },
      });
   });
   return result;
};
