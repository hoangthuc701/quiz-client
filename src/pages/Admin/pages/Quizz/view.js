import React, { useEffect } from "react";
import { getQuiz, deleteQuizzes } from "../../slice/quizzesSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory, Link } from "react-router-dom";
import { Divider, Tag, Button, Popconfirm, Comment, List } from "antd";
import {
  ClockCircleOutlined,
  QuestionCircleOutlined,
  ArrowLeftOutlined,
} from "@ant-design/icons";
import "./style.css";
import Avatar from "antd/lib/avatar/avatar";
import { UserOutlined } from "@ant-design/icons";

const ViewQuizz = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    const data = { id };
    dispatch(getQuiz(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

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
            <strong> Đáp án đúng: </strong>
            <span>
              {question.correctAnswer === 1
                ? question.answer1
                : question.correctAnswer === 2
                ? question.answer2
                : question.correctAnswer === 3
                ? question.answer3
                : question.correctAnswer === 4
                ? question.answer4
                : ""}
            </span>
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

      <div className="admin-exam" style={{ textAlign: "start" }}>
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
          <List
            style={{
              maxHeight: 200,
              overflow: "auto",
            }}
            header={
              <div className="question__title">
                {`Danh sách phản hồi: ${exercise?.feedbacks?.length || 0} phản
                  hồi`}
              </div>
            }
            itemLayout="horizontal"
            dataSource={exercise?.feedbacks}
            renderItem={(item) => {
              return (
                <li>
                  <Comment
                    author={item.createdUser?.fullname}
                    avatar={
                      <Avatar
                        icon={<UserOutlined />}
                        src={item?.createdUser?.avatarUrl}
                        alt={item?.createdUser?.fullname}
                      />
                    }
                    content={item.content}
                  />
                </li>
              );
            }}
          />
        </div>
      </div>
    </>
  );
};

export default ViewQuizz;
