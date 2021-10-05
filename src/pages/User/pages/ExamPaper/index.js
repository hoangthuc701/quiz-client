import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
import { getAllCategory } from "../../apis/category";
import { getAllTag } from "../../apis/tag";
import {
   getAllExercises,
   getAllByTag,
   getAllByCategory,
} from "../../apis/exercises";

const ExamPaper = () => {
   const { Content, Sider } = Layout;
   const { SubMenu } = Menu;
   const [allCategory, setAllCategory] = useState([]);
   const [allTag, setAllTag] = useState([]);
   const [allExam, setAllExam] = useState([]);
   const [title, setTitle] = useState("Tất cả");

   const handleItemClick = (type, name, id) => {
      if (type === "all") {
         getAllExercises().then((res) => {
            setAllExam(res.data.exercises);
            setTitle(`${name}`);
         });
      } else if (type === "category") {
         getAllByCategory(id).then((res) => {
            setAllExam(res.data.exercises);
            setTitle(`Thể loại: ${name}`);
         });
      } else if (type === "tag") {
         getAllByTag(id).then((res) => {
            setAllExam(res.data.exercises);
            setTitle(`Thẻ: ${name}`);
         });
      }
   };

   const fetchSider = async () => {
      Promise.all([getAllCategory(), getAllTag(), getAllExercises()]).then(
         (values) => {
            setAllCategory(values[0].data.categories);
            setAllTag(values[1].data.categories);
            setAllExam(values[2].data.exercises);
         }
      );
   };

   useEffect(() => {
      fetchSider();
   }, []);

   return (
      <Layout>
         <Sider className="site-layout-background" width={250}>
            <Menu
               style={{ minHeight: "100%", paddingTop: "30px" }}
               defaultSelectedKeys={["all"]}
               defaultOpenKeys={["all"]}
               mode="inline"
            >
               <Menu.Item
                  icon={<UnorderedListOutlined />}
                  key="all"
                  onClick={() => handleItemClick("all", "Tất cả")}
               >
                  Tất cả
               </Menu.Item>
               <SubMenu key="sub1" icon={<TagsOutlined />} title="Loại đề">
                  {allCategory.map((category) => (
                     <Menu.Item
                        key={category.id}
                        onClick={() =>
                           handleItemClick(
                              "category",
                              category.title,
                              category.id
                           )
                        }
                     >
                        {category.title}
                     </Menu.Item>
                  ))}
               </SubMenu>
               <SubMenu key="sub2" icon={<TagOutlined />} title="Thẻ">
                  {allTag.map((tag) => (
                     <Menu.Item
                        key={tag.id}
                        onClick={() =>
                           handleItemClick("tag", tag.title, tag.id)
                        }
                     >
                        {tag.title}
                     </Menu.Item>
                  ))}
               </SubMenu>
            </Menu>
         </Sider>
         <Content>
            <div className="exam-paper">
               <div className="exam-paper-content">
                  <h1 className="exam-paper__category">{title}</h1>
                  <Divider />
                  <ul className="exam-list">
                     {allExam.map((exam) => (
                        <li className="exam-item">
                           <Link to={`/user/exam-paper/${exam.id}`}>
                              <Card className="card">
                                 <div className="card__header">
                                    <p className="card__name">{exam.title}</p>
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
                                       {exam.duration} Phút
                                    </p>
                                    <p className="card__question">
                                       <QuestionCircleOutlined
                                          style={{ marginRight: "5px" }}
                                       />
                                       {exam.questions.length} Câu
                                    </p>
                                 </div>
                              </Card>
                           </Link>
                        </li>
                     ))}
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
