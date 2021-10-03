import React from "react";
import { Redirect, Switch, Link } from "react-router-dom";
import { Layout, Menu, Divider, Pagination } from "antd";
import {
   TagOutlined,
   UnorderedListOutlined,
   ClockCircleOutlined,
   QuestionCircleOutlined,
   EyeOutlined,
   TagsOutlined,
} from "@ant-design/icons";
import { Card } from "antd";
import "./style.css";

const ExamPaper = () => {
   const { Content, Sider } = Layout;
   const { SubMenu } = Menu;
   return (
      <Layout>
         <Sider className="site-layout-background">
            <Menu
               style={{ minHeight: "100%", paddingTop: "30px" }}
               defaultSelectedKeys={["1"]}
               defaultOpenKeys={["sub1"]}
               mode="inline"
            >
               <Menu.Item icon={<UnorderedListOutlined />} key="1">
                  Tất cả
               </Menu.Item>
               <SubMenu key="sub1" icon={<TagsOutlined />} title="Loại đề">
                  <Menu.Item key="1">Toán</Menu.Item>
                  <Menu.Item key="2">Ngữ Văn</Menu.Item>
                  <Menu.Item key="2">Anh Văn</Menu.Item>
                  <Menu.Item key="2">Vật Lý</Menu.Item>
                  <Menu.Item key="2">Hóa Học</Menu.Item>
               </SubMenu>
               <SubMenu key="sub2" icon={<TagOutlined />} title="Thẻ">
                  <Menu.Item key="1">Toán</Menu.Item>
                  <Menu.Item key="2">Ngữ Văn</Menu.Item>
               </SubMenu>
            </Menu>
         </Sider>
         <Content>
            <div className="exam-paper">
               <div className="exam-paper-content">
                  <h1 className="exam-paper__category">Tất cả</h1>
                  <Divider />
                  <ul className="exam-list">
                     <li className="exam-item">
                        <Link to="/user/exam-paper/001">
                           <Card className="card">
                              <div className="card__header">
                                 <p className="card__name">
                                    Đề thi HK2 môn Toán 12 năm 2021
                                 </p>
                                 <p className="card__view">
                                    <EyeOutlined
                                       style={{ marginRight: "5px" }}
                                    />
                                    Xem chi tiết
                                 </p>
                              </div>
                              <Divider />
                              <div className="card__footer">
                                 <p className="card__time">
                                    <ClockCircleOutlined
                                       style={{ marginRight: "5px" }}
                                    />
                                    15 Phút
                                 </p>
                                 <p className="card__question">
                                    <QuestionCircleOutlined
                                       style={{ marginRight: "5px" }}
                                    />
                                    10 Câu
                                 </p>
                              </div>
                           </Card>
                        </Link>
                     </li>

                     <li className="exam-item">
                        <Link to="/user/exam-paper/001">
                           <Card className="card">
                              <div className="card__header">
                                 <p className="card__name">
                                    Đề thi HK2 môn Toán 12 năm 2021
                                 </p>
                                 <p className="card__view">
                                    <EyeOutlined
                                       style={{ marginRight: "5px" }}
                                    />
                                    Xem chi tiết
                                 </p>
                              </div>
                              <Divider />
                              <div className="card__footer">
                                 <p className="card__time">
                                    <ClockCircleOutlined
                                       style={{ marginRight: "5px" }}
                                    />
                                    15 Phút
                                 </p>
                                 <p className="card__question">
                                    <QuestionCircleOutlined
                                       style={{ marginRight: "5px" }}
                                    />
                                    10 Câu
                                 </p>
                              </div>
                           </Card>{" "}
                        </Link>
                     </li>
                     <li className="exam-item">
                        <Link to="/user/exam-paper/001">
                           <Card className="card">
                              <div className="card__header">
                                 <p className="card__name">
                                    Đề thi HK2 môn Toán 12 năm 2021
                                 </p>
                                 <p className="card__view">
                                    <EyeOutlined
                                       style={{ marginRight: "5px" }}
                                    />
                                    Xem chi tiết
                                 </p>
                              </div>
                              <Divider />
                              <div className="card__footer">
                                 <p className="card__time">
                                    <ClockCircleOutlined
                                       style={{ marginRight: "5px" }}
                                    />
                                    15 Phút
                                 </p>
                                 <p className="card__question">
                                    <QuestionCircleOutlined
                                       style={{ marginRight: "5px" }}
                                    />
                                    10 Câu
                                 </p>
                              </div>
                           </Card>{" "}
                        </Link>
                     </li>
                     <li className="exam-item">
                        <Link to="/user/exam-paper/001">
                           <Card className="card">
                              <div className="card__header">
                                 <p className="card__name">
                                    Đề thi HK2 môn Toán 12 năm 2021
                                 </p>
                                 <p className="card__view">
                                    <EyeOutlined
                                       style={{ marginRight: "5px" }}
                                    />
                                    Xem chi tiết
                                 </p>
                              </div>
                              <Divider />
                              <div className="card__footer">
                                 <p className="card__time">
                                    <ClockCircleOutlined
                                       style={{ marginRight: "5px" }}
                                    />
                                    15 Phút
                                 </p>
                                 <p className="card__question">
                                    <QuestionCircleOutlined
                                       style={{ marginRight: "5px" }}
                                    />
                                    10 Câu
                                 </p>
                              </div>
                           </Card>{" "}
                        </Link>
                     </li>
                  </ul>
                  <div className="pagination">
                     <Pagination defaultCurrent={1} total={50} />
                  </div>
               </div>
            </div>
         </Content>
      </Layout>
   );
};

export default ExamPaper;
