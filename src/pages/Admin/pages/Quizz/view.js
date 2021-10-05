import React, { useEffect } from "react";
import { getQuiz, deleteQuizzes } from "../../slice/quizzesSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory, Link } from "react-router-dom";
import { Divider, Tag, Button, Popconfirm } from "antd";
import {
  ClockCircleOutlined,
  QuestionCircleOutlined,
  ArrowLeftOutlined,
} from "@ant-design/icons";

const ViewQuizz = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    const data = { id };
    dispatch(getQuiz(data));
  }, []);

  const exercise = useSelector((state) => state.quizzes.exercise);

  const renderQuestion = (question) => {
    return (
      <li className="question-item">
        <p className="question__title">Câu {question.no}:</p>
        <p className="question__des">{question.content}</p>
        <ul className="answer-list">
          <li className="answer-item">
            <strong>A. </strong>
            <span>{question.answer1}</span>
          </li>
          <li className="answer-item">
            <strong>B. </strong>
            <span>{question.answer2}</span>
          </li>
          <li className="answer-item">
            <strong>C. </strong>
            <span>{question.answer3}</span>
          </li>
          <li className="answer-item">
            <strong>D. </strong>
            <span>{question.answer4}</span>
          </li>
          <li className="answer-item">
            <strong> Thứ tự đáp án đúng: </strong>
            <span>{question.correctAnswer}</span>
          </li>
        </ul>
      </li>
    );
  };

  const handleDelete = () => {
    let data = { id, active: false };
    dispatch(
      deleteQuizzes(
        data,
        () => {
          history.push("/admin/quizzes");
        },
        () => {}
      )
    );
  };

  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <Link to="/admin/quizzes">
            <Button type="primary" style={{ marginLeft: "28px" }}>
              <ArrowLeftOutlined />
              Quản lý đề thi{" "}
            </Button>{" "}
          </Link>
        </div>
        <div>
          <Link to={`/admin/quizzes/${id}/edit`}>
            <Button type="primary"> Chỉnh sửa </Button>{" "}
          </Link>
          <Popconfirm
            title="Bạn có chắc chắn muốn xóa mục này?"
            onConfirm={() => handleDelete()}
          >
            <Button type="primary" danger>
              Xóa
            </Button>
          </Popconfirm>
        </div>
      </div>

      <div className="exam" style={{ textAlign: "start" }}>
        <div className="exam-container">
          <p className="exam__name">{exercise?.title}</p>
          <p className="exam__des">{exercise?.description}</p>
          <div className="exam__info">
            <p className="info__time">
              <ClockCircleOutlined style={{ marginRight: "5px" }} />
              {exercise?.duration} Phút
            </p>
            <p className="info__question">
              <QuestionCircleOutlined style={{ marginRight: "5px" }} />
              {exercise?.questions?.length} Câu
            </p>
          </div>
          <ul>
            Danh mục: <b>{exercise?.category?.title} </b>
          </ul>
          <ul>
            Nhãn:{" "}
            {exercise?.tags?.map((tag) => (
              <Tag color="gold">{tag.title}</Tag>
            ))}
          </ul>
          <Divider />
          <ul className="question-list">
            {exercise?.questions?.map((question) => renderQuestion(question))}
          </ul>
          <Divider />
        </div>
      </div>
    </>
  );
};

export default ViewQuizz;
