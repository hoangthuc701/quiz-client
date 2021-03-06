import React, { useState, useEffect } from "react";
import { ClockCircleOutlined, CheckCircleOutlined } from "@ant-design/icons";
import { Divider, Radio, Form } from "antd";
import { useParams } from "react-router-dom";
import { getHistoryById } from "../../apis/exercises";
import "./style.css";

function HistoryExam(props) {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [historyExam, setHistoryExam] = useState({});
  useEffect(() => {
    const fetchHistoryExam = async () => {
      const exam = await getHistoryById(id);
      setHistoryExam(exam.data.exercise);
      setIsLoading(false);
    };
    fetchHistoryExam();
  }, [id]);

  return (
    <div>
      {!isLoading && (
        <div className="history-exam">
          <div className="exam-container">
            <p className="exam__name">{historyExam.exercise?.title}</p>
            <p className="exam__des">{historyExam.exercise?.description}</p>
            <div className="exam__info">
              {/* <p className="user">
                <UserOutlined
                  style={{ marginRight: "5px", color: "#1890ff" }}
                />
                {historyExam.user?.name}
              </p> */}
              <p className="info__question">
                <CheckCircleOutlined style={{ marginRight: "5px" }} />
                {historyExam.nCorrectAnswer}/{historyExam.nQuestion} Câu
              </p>
              <p className="info__time">
                <ClockCircleOutlined style={{ marginRight: "5px" }} />
                {historyExam.exercise.duration} Phút
              </p>
              <p className="info__tag"></p>
            </div>
            <Divider />
            <ul className="question-list">
              {historyExam?.answerList?.map((question, index) => (
                <li className="question-item" key={question.id}>
                  <p className="question__title">Câu {index + 1}:</p>
                  <p className="question__des">{question.content}</p>
                  <ul className="answer-list">
                    <Form.Item name={`answer${index + 1}`}>
                      <Radio.Group defaultValue={question.userAnswer}>
                        <li
                          className={
                            question.correctAnswer === 1
                              ? "answer-item correct"
                              : "answer-item"
                          }
                        >
                          <Radio value={1} disabled>
                            <span>{question.answer1}.</span>
                          </Radio>
                        </li>
                        <li
                          className={
                            question.correctAnswer === 2
                              ? "answer-item correct"
                              : "answer-item"
                          }
                        >
                          <Radio value={2} disabled>
                            <span>{question.answer2}.</span>
                          </Radio>
                        </li>
                        <li
                          className={
                            question.correctAnswer === 3
                              ? "answer-item correct"
                              : "answer-item"
                          }
                        >
                          <Radio value={3} disabled>
                            <span>{question.answer3}.</span>
                          </Radio>
                        </li>
                        <li
                          className={
                            question.correctAnswer === 4
                              ? "answer-item correct"
                              : "answer-item"
                          }
                        >
                          <Radio value={4} disabled>
                            <span>{question.answer4}.</span>
                          </Radio>
                        </li>
                      </Radio.Group>
                    </Form.Item>
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default HistoryExam;
