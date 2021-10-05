import React, { useState } from "react";
import {
   TagOutlined,
   ClockCircleOutlined,
   QuestionCircleOutlined,
   EditOutlined,
   CommentOutlined,
   SendOutlined,
   CheckOutlined,
} from "@ant-design/icons";
import { Divider, Button, Input, Radio } from "antd";
import "./style.css";
import CountDown from "./CountDown";

const Exam = () => {
   const { Search } = Input;
   const [isDoing, setIsDoing] = useState(false);
   const [isDone, setIsDone] = useState(false);
   const [isTiming, setIsTiming] = useState(false);

   const handleDoingClick = () => {
      setIsDoing(true);
      setIsTiming(true);
   };
   const handleDoneClick = () => {
      setIsDone(true);
      setIsTiming(false);
   };

   return (
      <div className="exam">
         <div className="exam__left">
            <div className="exam-container">
               <p className="exam__name">
                  Trắc nghiệm 15 phút văn học lớp 12 - Chủ đề Tiếng Việt - Đề số
                  1
               </p>
               <p className="exam__des">
                  Trắc nghiệm 15 phút Chủ đề Tiếng Việt - văn học lớp 12 - Đề số
                  1 trong loạt bài trắc nghiệm ôn luyện kiến thức về môn văn học
                  lớp 12 do cungthi.vn biên soạn. Ngoài ra các bạn có thể tham
                  khảo thêm các loại bài, đề trắc nghiệm văn học khác trên hệ
                  thống cungthi.vn. Các bạn có thể tham khảo thêm các bài giảng
                  về các chuyên đề trong sách giáo khoa văn học lớp 12 để việc
                  ôn luyện đạt kết quả tốt nhất
               </p>
               <div className="exam__info">
                  <p className="info__time">
                     <ClockCircleOutlined style={{ marginRight: "5px" }} />
                     15 Phút
                  </p>
                  <p className="info__question">
                     <QuestionCircleOutlined style={{ marginRight: "5px" }} />
                     10 Câu
                  </p>
                  <p className="info__tag">
                     <TagOutlined style={{ marginRight: "5px" }} />
                     <ul>
                        <li>Văn học</li>
                     </ul>
                  </p>
               </div>
               <Divider />
               {isDoing && (
                  <div>
                     <ul className="question-list">
                        <li className="question-item">
                           <p className="question__title">Câu 1:</p>
                           <p className="question__des">
                              Từ nào không phải là thuật ngữ khoa học của chuyên
                              ngành nghiên cứu văn học trong văn bản về "vần
                              luật bằng trắc của thơ Đường luật" sau đây: "Thơ
                              Đường luật buộc phải theo sự quy định về thanh
                              bằng, thanh trắc trong từng câu và trong cả bài.
                              Hệ thống thanh bằng, thanh trắc được tính từ chữ
                              thứ hai của câu thứ nhất. Nếu chữ này thanh bằng
                              thì bài thơ thuộc loại luật bằng (và ngược lại).
                              Sự sắp xếp các thanh bằng trắc trong thơ Đường
                              chẳng qua chỉ làm cho điệu thơ không đơn điệu."
                              (Từ điển thuật ngữ văn học - Lê Bá Hán, Trần Đình
                              Sử, Nguyễn Khắc Phi)
                           </p>
                           <ul className="answer-list">
                              <Radio.Group>
                                 <li className="answer-item">
                                    <Radio value={1} disabled={isDone}>
                                       <strong>A. </strong>
                                       <span>"Thanh bằng".</span>
                                    </Radio>
                                 </li>
                                 <li className="answer-item">
                                    <Radio value={2} disabled={isDone}>
                                       <strong>B. </strong>
                                       <span>"Hệ thống".</span>
                                    </Radio>
                                 </li>
                                 <li className="answer-item">
                                    <Radio value={3} disabled={isDone}>
                                       <strong>C. </strong>
                                       <span>"Luật bằng".</span>
                                    </Radio>
                                 </li>
                                 <li className="answer-item">
                                    <Radio value={4} disabled={isDone}>
                                       <strong>D. </strong>
                                       <span>"Thơ Đường luật".</span>
                                    </Radio>
                                 </li>
                              </Radio.Group>
                           </ul>
                        </li>
                     </ul>
                     <Divider />
                  </div>
               )}
               {!isDoing && !isDone && (
                  <div className="comment">
                     <p className="comment__title">
                        <CommentOutlined
                           style={{ marginRight: "10px", color: "#1890ff" }}
                        />
                        Bình luận
                     </p>
                     <ul className="comment-list">
                        <li className="comment-item">
                           <p>
                              <span className="comment__name">Louis Phan:</span>
                              <span className="comment__content">Good!</span>
                           </p>
                        </li>
                        <li className="comment-item">
                           <p>
                              <span className="comment__name">Louis Phan:</span>
                              <span className="comment__content">
                                 This Exam Very Good!
                              </span>
                           </p>
                        </li>
                     </ul>
                     <Search
                        placeholder="Nhận xét của bạn..."
                        allowClear
                        enterButton={
                           <span>
                              <EditOutlined style={{ marginRight: "10px" }} />
                              Bình luận
                           </span>
                        }
                        size="default"
                        style={{ maxWidth: 500 }}
                     />
                  </div>
               )}
               {isDone && (
                  <Search
                     placeholder="Phản hồi của bạn"
                     allowClear
                     enterButton={
                        <span>
                           <SendOutlined style={{ marginRight: "10px" }} />
                           Phản hồi
                        </span>
                     }
                     size="default"
                     style={{ maxWidth: 500 }}
                  />
               )}
            </div>
         </div>
         <div className="exam__right">
            <div className="exam__right-box">
               <div className="exam-container">
                  <div className="exam__user">
                     <p>Họ và tên: </p>
                     <strong>Louis Phan</strong>
                  </div>
                  <Divider />
                  <div className="exam__time">
                     <p className="exam__time-value">
                        <CountDown
                           time={0.1}
                           start={isTiming}
                           callBack={handleDoneClick}
                        />
                     </p>
                  </div>
                  {isDone && (
                     <div>
                        <Divider />
                        <div className="exam__core">
                           <p>
                              Số câu đúng: <span>19/20</span>
                           </p>
                        </div>
                     </div>
                  )}
                  <Divider />
                  {isDoing ? (
                     <Button
                        type="primary"
                        onClick={() => handleDoneClick()}
                        disabled={isDone}
                     >
                        <CheckOutlined />
                        Nộp bài thi
                     </Button>
                  ) : (
                     <Button type="primary" onClick={() => handleDoingClick()}>
                        <EditOutlined />
                        Bắt đầu làm bài thi
                     </Button>
                  )}
                  <Divider />
                  <p className="exam__note">
                     <strong>Chú ý:</strong> Khi bạn bắt đầu làm bài thi thì
                     thời gian sẽ được tính, bạn bắt buộc phải hoàn thành bài
                     thi của mình trong thời gian cho phép, quá thời gian quy
                     định hệ thống sẽ tự động dừng bài làm của bạn và trả kết
                     quả.
                  </p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Exam;
