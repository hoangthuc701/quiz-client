import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, Divider, Layout } from "antd";
import { ClockCircleOutlined, CheckCircleOutlined } from "@ant-design/icons";
import { getAllExercisesHistory } from "../../apis/exercises";
import "./style.css";

function HistoryExamPaper(props) {
  const [allExam, setAllExam] = useState([]);

  const { Content } = Layout;

  useEffect(() => {
    const fetchSider = async () => {
      getAllExercisesHistory().then((res) => {
        setAllExam(res.data.submissionList);
      });
    };
    fetchSider();
  }, []);

  return (
    <Layout>
      <Content style={{ display: "flex", flexDirection: "column" }}>
        <div className="history-exampaper">
          <div className="content">
            <h1 className="title">Lịch sử làm bài</h1>
            <Divider />
            <ul className="exam-list">
              {allExam.map((exam) => (
                <li className="exam-item" key={exam.id}>
                  <Link to={`/user/exam-history/${exam.id}`}>
                    <Card className="card">
                      <div className="card__header">
                        <p className="card__name">{exam.exercise.title}</p>
                        {/* <p className="card__view">
                          <UserOutlined style={{ marginRight: "5px" }} />
                          {exam.user?.name || "someone"}
                        </p> */}
                      </div>
                      <Divider />
                      <div className="card__footer">
                        <p className="card__question">
                          <CheckCircleOutlined style={{ marginRight: "5px" }} />
                          {exam.nCorrectAnswer}/{exam.nQuestion} Câu
                        </p>
                        <p className="card__time">
                          <ClockCircleOutlined style={{ marginRight: "5px" }} />
                          {exam.exercise.duration} Phút
                        </p>
                      </div>
                    </Card>
                  </Link>
                </li>
              ))}
            </ul>
            {/* <div className="pagination">
              <Pagination defaultCurrent={1} total={50} />
            </div> */}
          </div>
        </div>
      </Content>
    </Layout>
  );
}

export default HistoryExamPaper;
