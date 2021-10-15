// import apiCaller from "../../../api-config/apiCaller";

export const getAllExercises = async () => {
   // const path = "/exercises";
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
   // const path = "/exercises";
   // const data = {
   //    categoryId,
   // };
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
   // const path = "/exercises";
   // const data = {
   //    tagId,
   // };
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

export const getById = async (id) => {
   // const path = "/exercises";
   // const data = {
   //    id,
   // };
   //   const result = await apiCaller("POST", path, JSON.stringify(data), null);
   const result = new Promise((resolve) => {
      resolve({
         code: 1000,
         data: {
            message: "Lấy thông tin đề thi thành công.",
            exercise: {
               id: 1,
               title: "Bài trắc nghiệp về ngôn ngữ Java",
               description:
                  "Tổng hợp các câu hỏi trắc nghiệm Java  có đáp án đầy đủ + lời giải chi tiết nhằm giúp các bạn dễ dàng ôn tập lại toàn bộ các kiến thức. Để ôn tập hiệu quả các bạn có thể ôn theo từng phần  trong bộ câu hỏi này bằng cách trả lời các câu hỏi và xem lại đáp án và lời giải chi tiết. Sau đó các bạn hãy chọn tạo ra đề ngẫu nhiên  để kiểm tra lại kiến thức đã ôn.",
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
                     content: "Đâu là câu SAI về ngôn ngữ Java?",
                     correctAnswer: 4,
                     answer1:
                        "A. Ngôn ngữ Java có phân biệt chữ hoa – chữ thường ",
                     answer2: "B. Java là ngôn ngữ lập trình hướng đối tượng",
                     answer3:
                        "C. Dấu chấm phẩy được sử dụng để kết thúc lệnh trong java ",
                     answer4:
                        "D. Chương trình viết  bằng Java chỉ có thể chạy trên hệ điều hành win ",
                  },
                  {
                     id: 2,
                     no: 2,
                     content:
                        "Đâu không phải là một kiểu dữ liệu nguyên thủy trong Java?",
                     correctAnswer: 4,
                     answer1: "A. double",
                     answer2: "B. int  ",
                     answer3: "C. long ",
                     answer4: "D. long float ",
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
         },
      });
   });
   return result;
};

export const getAllExercisesHistory = async () => {
   // const path = "/exercises";
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
                  user: {
                     id: 1,
                     name: "Luis Phan",
                  },
                  timeWork: 10,
                  numberCorrect: 1,
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
                  user: {
                     id: 1,
                     name: "Luis Phan",
                  },
                  timeWork: 10,
                  numberCorrect: 1,
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
               {
                  id: 2,
                  title: "Bài trắc nghiệp Reactjs",
                  description: "Bài trắc nghiệp về FrameWord Reactjs.",
                  duration: 30,
                  user: {
                     id: 1,
                     name: "Luis Phan",
                  },
                  timeWork: 10,
                  numberCorrect: 1,
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

export const getHistoryById = async (id) => {
   // const path = "/exercises";
   // const data = {
   //    id,
   // };
   //   const result = await apiCaller("POST", path, JSON.stringify(data), null);
   const result = new Promise((resolve) => {
      resolve({
         code: 1000,
         data: {
            message: "Lấy thông tin đề thi thành công.",
            exercise: {
               id: 1,
               title: "Bài trắc nghiệp về ngôn ngữ Java",
               description:
                  "Tổng hợp các câu hỏi trắc nghiệm Java  có đáp án đầy đủ + lời giải chi tiết nhằm giúp các bạn dễ dàng ôn tập lại toàn bộ các kiến thức. Để ôn tập hiệu quả các bạn có thể ôn theo từng phần  trong bộ câu hỏi này bằng cách trả lời các câu hỏi và xem lại đáp án và lời giải chi tiết. Sau đó các bạn hãy chọn tạo ra đề ngẫu nhiên  để kiểm tra lại kiến thức đã ôn.",
               duration: 30,
               timeDone: 9,
               user: {
                  id: 1,
                  name: "Nguyen Minh Sang",
               },
               category: {
                  id: 1,
                  title: "Java",
                  description: "Các bài tập về ngôn ngữ lập trình Java",
               },
               createdUser: {
                  id: 1,
                  email: "louis.phhh@gmail.com",
               },
               numberCorrect: 1,
               questions: [
                  {
                     id: 1,
                     no: 1,
                     content: "Đâu là câu SAI về ngôn ngữ Java?",
                     correctAnswer: 4,
                     selectedAnswer: 1,
                     answer1:
                        "A. Ngôn ngữ Java có phân biệt chữ hoa – chữ thường ",
                     answer2: "B. Java là ngôn ngữ lập trình hướng đối tượng",
                     answer3:
                        "C. Dấu chấm phẩy được sử dụng để kết thúc lệnh trong java ",
                     answer4:
                        "D. Chương trình viết  bằng Java chỉ có thể chạy trên hệ điều hành win ",
                  },
                  {
                     id: 2,
                     no: 2,
                     content:
                        "Đâu không phải là một kiểu dữ liệu nguyên thủy trong Java?",
                     correctAnswer: 4,
                     selectedAnswer: 4,
                     answer1: "A. double",
                     answer2: "B. int  ",
                     answer3: "C. long ",
                     answer4: "D. long float ",
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
         },
      });
   });
   return result;
};
