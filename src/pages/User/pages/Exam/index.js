import React, { useState, useEffect, useRef } from "react";
import {
   TagOutlined,
   ClockCircleOutlined,
   QuestionCircleOutlined,
   EditOutlined,
   CommentOutlined,
   SendOutlined,
   CheckOutlined,
} from "@ant-design/icons";
import { Divider, Button, Input, Radio, Form } from "antd";
import { useParams } from "react-router-dom";
import { getById } from "../../apis/exercises";
import { getAllByExercise } from "../../apis/comment";
import "./style.css";
import CountDown from "./CountDown";

const Exam = () => {
   const { id } = useParams();
   const { Search } = Input;

   const submitRef = useRef(null);
   const [isLoading, setIsLoading] = useState(true);
   const [exam, setExam] = useState({});
   const [correctAnswers, setCorrectAnswers] = useState([]);
   const [comments, setComment] = useState([]);
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
      submitRef.current.click();
   };

   const onComment = (value) => {
      console.log(value);
   };

   const onFeedBack = (value) => {
      console.log(value);
   };

   const onFinish = (values) => {
      console.log(values.answer1);
      const questions = [...exam.questions];
      const correctAnswers = questions.filter((question) => {
         const name = `answer${question.no}`;
         return question.correctAnswer === values[name];
      });
      setCorrectAnswers(correctAnswers);
   };

   const onFinishFailed = (errorInfo) => {
      console.log("Failed:", errorInfo);
   };

   useEffect(() => {
      const fetchExam = async () => {
         Promise.all([getById(id), getAllByExercise(id)]).then((values) => {
            setExam(values[0].data.exercise);
            setComment(values[1].data.comments);
            setIsLoading(false);
         });
      };
      fetchExam();
   }, []);

   return (
      <div>
         {!isLoading && (
            <div className="exam">
               <div className="exam__left">
                  <div className="exam-container">
                     <p className="exam__name">{exam.title}</p>
                     <p className="exam__des">{exam.description}</p>
                     <div className="exam__info">
                        <p className="info__time">
                           <ClockCircleOutlined
                              style={{ marginRight: "5px" }}
                           />
                           {exam.duration} Phút
                        </p>
                        <p className="info__question">
                           <QuestionCircleOutlined
                              style={{ marginRight: "5px" }}
                           />
                           {exam.questions.length} Câu
                        </p>
                        <p className="info__tag">
                           <TagOutlined style={{ marginRight: "5px" }} />
                           <ul className="info__tag-list">
                              {exam.tags.map((tag) => (
                                 <li key={tag.id}>
                                    {tag.title}
                                    <span>,</span>
                                 </li>
                              ))}
                           </ul>
                        </p>
                     </div>
                     <Divider />
                     {isDoing && (
                        <div>
                           <Form
                              name="basic"
                              labelCol={{ span: 8 }}
                              wrapperCol={{ span: 16 }}
                              initialValues={{ remember: true }}
                              onFinish={onFinish}
                              onFinishFailed={onFinishFailed}
                              autoComplete="off"
                           >
                              <ul className="question-list">
                                 {exam.questions.map((question) => (
                                    <li className="question-item">
                                       <p className="question__title">
                                          Câu {question.no}:
                                       </p>
                                       <p className="question__des">
                                          {question.content}
                                       </p>
                                       <ul className="answer-list">
                                          <Form.Item
                                             name={`answer${question.no}`}
                                          >
                                             <Radio.Group>
                                                <li
                                                   className={
                                                      question.correctAnswer ===
                                                         1 && isDone
                                                         ? "answer-item correct"
                                                         : "answer-item"
                                                   }
                                                >
                                                   <Radio
                                                      value={1}
                                                      disabled={isDone}
                                                   >
                                                      <span>
                                                         {question.answer1}.
                                                      </span>
                                                   </Radio>
                                                </li>
                                                <li
                                                   className={
                                                      question.correctAnswer ===
                                                         2 && isDone
                                                         ? "answer-item correct"
                                                         : "answer-item"
                                                   }
                                                >
                                                   <Radio
                                                      value={2}
                                                      disabled={isDone}
                                                   >
                                                      <span>
                                                         {question.answer2}.
                                                      </span>
                                                   </Radio>
                                                </li>
                                                <li
                                                   className={
                                                      question.correctAnswer ===
                                                         3 && isDone
                                                         ? "answer-item correct"
                                                         : "answer-item"
                                                   }
                                                >
                                                   <Radio
                                                      value={3}
                                                      disabled={isDone}
                                                   >
                                                      <span>
                                                         {question.answer3}.
                                                      </span>
                                                   </Radio>
                                                </li>
                                                <li
                                                   className={
                                                      question.correctAnswer ===
                                                         4 && isDone
                                                         ? "answer-item correct"
                                                         : "answer-item"
                                                   }
                                                >
                                                   <Radio
                                                      value={4}
                                                      disabled={isDone}
                                                   >
                                                      <span>
                                                         {question.answer4}.
                                                      </span>
                                                   </Radio>
                                                </li>
                                             </Radio.Group>
                                          </Form.Item>
                                       </ul>
                                    </li>
                                 ))}
                              </ul>
                              <Button
                                 style={{ display: "none" }}
                                 type="primary"
                                 htmlType="submit"
                                 ref={submitRef}
                              >
                                 Submit
                              </Button>
                           </Form>
                           <Divider />
                        </div>
                     )}
                     {!isDoing && !isDone && (
                        <div className="comment">
                           <p className="comment__title">
                              <CommentOutlined
                                 style={{
                                    marginRight: "10px",
                                    color: "#1890ff",
                                 }}
                              />
                              Bình luận
                           </p>
                           <ul className="comment-list">
                              {comments.map((comment) => (
                                 <li className="comment-item">
                                    <p>
                                       <span className="comment__name">
                                          {comment.user.name}:
                                       </span>
                                       <span className="comment__content">
                                          {comment.content}
                                       </span>
                                    </p>
                                 </li>
                              ))}
                           </ul>
                           <Search
                              placeholder="Nhận xét của bạn..."
                              allowClear
                              enterButton={
                                 <span>
                                    <EditOutlined
                                       style={{ marginRight: "10px" }}
                                    />
                                    Bình luận
                                 </span>
                              }
                              size="default"
                              style={{ maxWidth: 500 }}
                              onSearch={onComment}
                           />
                        </div>
                     )}
                     {isDone && (
                        <Search
                           placeholder="Phản hồi của bạn"
                           allowClear
                           enterButton={
                              <span>
                                 <SendOutlined
                                    style={{ marginRight: "10px" }}
                                 />
                                 Phản hồi
                              </span>
                           }
                           size="default"
                           style={{ maxWidth: 500 }}
                           onSearch={onFeedBack}
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
                                 time={exam.duration}
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
                                    Số câu đúng:
                                    <span>
                                       {correctAnswers.length}/
                                       {exam.questions.length}
                                    </span>
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
                           <Button
                              type="primary"
                              onClick={() => handleDoingClick()}
                           >
                              <EditOutlined />
                              Bắt đầu làm bài thi
                           </Button>
                        )}
                        <Divider />
                        <p className="exam__note">
                           <strong>Chú ý:</strong> Khi bạn bắt đầu làm bài thi
                           thì thời gian sẽ được tính, bạn bắt buộc phải hoàn
                           thành bài thi của mình trong thời gian cho phép, quá
                           thời gian quy định hệ thống sẽ tự động dừng bài làm
                           của bạn và trả kết quả.
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         )}
      </div>
   );
};

export default Exam;
