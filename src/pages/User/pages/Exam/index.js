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
import { Divider, Button, Input, Radio, Form, message, Modal } from "antd";
import { useParams, Link } from "react-router-dom";
import { getById } from "../../apis/exercises";
import { getAllByExercise, addComment } from "../../apis/comment";
import { startSubmit, submit } from "../../apis/submission";
import { addFeedBack } from "../../apis/feedback";
import { useSelector } from "react-redux";
import "./style.css";
import CountDown from "./CountDown";
import Loading from "../Loading";

const Exam = () => {
  const [commentForm] = Form.useForm();
  const [formFeedBack] = Form.useForm();
  const { id } = useParams();
  const submitRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [exam, setExam] = useState({});
  const [questions, setQuestions] = useState([]);
  const [correctAnswer, setCorrectAnswer] = useState(0);
  const [comments, setComment] = useState([]);
  const [isDoing, setIsDoing] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const [isTiming, setIsTiming] = useState(false);
  const [isModalFeedBack, setIsModalFeedBack] = useState(false);
  const [isFeedBack, setIsFeedBack] = useState(false);
  const [submissionId, setSubmissionId] = useState(0);
  const user = useSelector((state) => state.userAuth.user);

  const handleDoingClick = async () => {
    const res = await startSubmit({ exerciseId: id });
    console.log(res);
    if (res.code === 1000) {
      setSubmissionId(res.data.submissionId);
      setIsDoing(true);
      setIsTiming(true);
    }
  };
  const handleDoneClick = () => {
    setIsDone(true);
    setIsTiming(false);
    submitRef.current.click();
  };

  const onComment = async (values) => {
    commentForm.resetFields();
    const comment = await addComment({
      exerciseId: id,
      content: values.comment,
    });
    if (comment.code === 1000) {
      message.success("B??nh lu???n b??i thi th??nh c??ng");
      const comments = await getAllByExercise(id);
      setComment(comments.data.comments);
    } else {
      message.error("B??nh lu???n b??i thi th???t b???i");
    }
  };

  const onOkFeedBack = () => {
    formFeedBack.submit();
  };

  const onFinishFeedBack = async (values) => {
    try {
      const res = await addFeedBack({ submissionId, content: values.feedback });
      if (res.code === 1000) {
        message.success("Ph???n h???i b??i thi th??nh c??ng");
        setIsFeedBack(true);
      } else {
        message.error("Ph???n h???i b??i thi th???t b???i");
      }

      setIsModalFeedBack(false);
    } catch (error) {}
  };

  const onFinish = async (values) => {
    const answerList = [];
    for (const value in values) {
      answerList.push({ questionId: value, answer: values[value] });
    }
    const res = await submit({ submissionId, answerList });
    if (res.code === 1000) {
      message.success("N???p b??i thi th??nh c??ng");
      setCorrectAnswer(res.data.nCorrectAnswer);
      const questionsResult = questions.map((question, i) => {
        return {
          ...question,
          correctAnswer: res.data.correctAnswerList[i].correctAnswer,
          userAnswer: res.data.correctAnswerList[i].userAnswer,
        };
      });
      setQuestions(questionsResult);
    } else {
      message.error("N???p b??i thi th???t b???i");
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  useEffect(() => {
    const fetchExam = async () => {
      Promise.all([getById(id), getAllByExercise(id)]).then((values) => {
        console.log(values[0]);
        setExam(values[0].data.exercise);
        setQuestions(values[0].data.exercise.questions);
        setComment(values[1].data.comments);
        setIsLoading(false);
      });
    };
    fetchExam();
  }, [id]);

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="exam">
          <div className="exam__left">
            <div className="exam-container">
              <p className="exam__name">{exam.title}</p>
              <p className="exam__des">{exam.description}</p>
              <div className="exam__info">
                <p className="info__time">
                  <ClockCircleOutlined style={{ marginRight: "5px" }} />
                  {exam.duration} Phu??t
                </p>
                <p className="info__question">
                  <QuestionCircleOutlined style={{ marginRight: "5px" }} />
                  {questions.length} C??u
                </p>
                <p className="info__tag">
                  <TagOutlined style={{ marginRight: "5px" }} />
                  <ul className="info__tag-list">
                    {exam.tags.map((tag) => (
                      <li key={tag.id}>
                        <Link to={`/user/exam-paper/tag/${tag.id}`}>
                          {tag.title}
                        </Link>
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
                      {questions.map((question, i) => (
                        <li className="question-item" key={question.id}>
                          <p className="question__title">C??u {i + 1}:</p>
                          <p className="question__des">{question.content}</p>
                          <ul className="answer-list">
                            <Form.Item name={question.id}>
                              <Radio.Group>
                                <li
                                  className={
                                    question.correctAnswer === 1 && isDone
                                      ? "answer-item correct"
                                      : question.userAnswer === 1 && isDone
                                      ? "answer-item wrong"
                                      : "answer-item"
                                  }
                                >
                                  <Radio value={1} disabled={isDone}>
                                    <span>{question.answer1}.</span>
                                  </Radio>
                                </li>
                                <li
                                  className={
                                    question.correctAnswer === 2 && isDone
                                      ? "answer-item correct"
                                      : question.userAnswer === 2 && isDone
                                      ? "answer-item wrong"
                                      : "answer-item"
                                  }
                                >
                                  <Radio value={2} disabled={isDone}>
                                    <span>{question.answer2}.</span>
                                  </Radio>
                                </li>
                                <li
                                  className={
                                    question.correctAnswer === 3 && isDone
                                      ? "answer-item correct"
                                      : question.userAnswer === 3 && isDone
                                      ? "answer-item wrong"
                                      : "answer-item"
                                  }
                                >
                                  <Radio value={3} disabled={isDone}>
                                    <span>{question.answer3}.</span>
                                  </Radio>
                                </li>
                                <li
                                  className={
                                    question.correctAnswer === 4 && isDone
                                      ? "answer-item correct"
                                      : question.userAnswer === 4 && isDone
                                      ? "answer-item wrong"
                                      : "answer-item"
                                  }
                                >
                                  <Radio value={4} disabled={isDone}>
                                    <span>{question.answer4}.</span>
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
                    Bi??nh lu????n
                  </p>
                  <ul className="comment-list">
                    {comments.map((comment) => (
                      <li className="comment-item" key={comment.id}>
                        <p>
                          <span className="comment__name">
                            {comment.user.fullname} :
                          </span>
                          <span className="comment__content">
                            {comment.content}
                          </span>
                        </p>
                      </li>
                    ))}
                  </ul>
                  <Form form={commentForm} onFinish={onComment}>
                    <Form.Item
                      name="comment"
                      rules={[
                        {
                          required: true,
                          message: "B??nh lu???n kh??ng ???????c tr???ng!",
                        },
                      ]}
                    >
                      <Input
                        placeholder="Nh????n xe??t cu??a ba??n..."
                        style={{ width: "450px" }}
                      />
                    </Form.Item>
                    <Form.Item>
                      <Button type="primary" htmlType="submit">
                        <EditOutlined style={{ marginRight: "10px" }} />
                        Bi??nh lu????n
                      </Button>
                    </Form.Item>
                  </Form>
                </div>
              )}
            </div>
          </div>
          <div className="exam__right">
            <div className="exam__right-box">
              <div className="exam-container">
                <div className="exam__user">
                  <p>Ho?? va?? t??n: </p>
                  <strong>{user.fullname}</strong>
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
                        S???? c??u ??u??ng:
                        <span>
                          {correctAnswer}/{questions.length}
                        </span>
                      </p>
                    </div>
                  </div>
                )}
                <Divider />
                {isDoing ? (
                  <div>
                    <Button
                      type="primary"
                      onClick={() => handleDoneClick()}
                      disabled={isDone}
                      style={{ marginRight: "15px" }}
                    >
                      <CheckOutlined />
                      N????p ba??i thi
                    </Button>
                    <Button
                      type="primary"
                      onClick={() => setIsModalFeedBack(true)}
                      disabled={isFeedBack}
                    >
                      <SendOutlined />
                      Pha??n h????i
                    </Button>
                  </div>
                ) : (
                  <Button type="primary" onClick={() => handleDoingClick()}>
                    <EditOutlined />
                    B????t ??????u la??m ba??i thi
                  </Button>
                )}
                <Divider />
                <p className="exam__note">
                  <strong>Chu?? y??:</strong> Khi ba??n b????t ??????u la??m ba??i thi thi?? th????i
                  gian se?? ????????c ti??nh, ba??n b????t bu????c pha??i hoa??n tha??nh ba??i thi cu??a
                  mi??nh trong th????i gian cho phe??p, qua?? th????i gian quy ??i??nh h???? th????ng
                  se?? t???? ??????ng d????ng ba??i la??m cu??a ba??n va?? tra?? k????t qua??.
                </p>
              </div>
            </div>
          </div>
          <Modal
            title="Ph???n h???i b??i thi"
            visible={isModalFeedBack}
            onOk={() => onOkFeedBack()}
            onCancel={() => setIsModalFeedBack(false)}
            okText="G???i"
            cancelText="H???y"
          >
            <Form
              form={formFeedBack}
              layout="vertical"
              onFinish={onFinishFeedBack}
              autoComplete="off"
            >
              <Form.Item
                name="feedback"
                rules={[
                  {
                    required: true,
                    message: "N???i dung ph???n h???i tr???ng!",
                  },
                ]}
                style={{ marginBottom: "0px" }}
              >
                <Input placeholder="Nh???p ph???n h???i" />
              </Form.Item>
            </Form>
          </Modal>
        </div>
      )}
    </div>
  );
};

export default Exam;
