import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Layout, Menu, Divider } from "antd";
import {
   TagOutlined,
   UnorderedListOutlined,
   ClockCircleOutlined,
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
import Loading from "../Loading";

const ExamPaper = () => {
   const { SubMenu } = Menu;
   const { Content, Sider } = Layout;
   const { categoryId, tagId } = useParams();
   const [allCategory, setAllCategory] = useState([]);
   const [allTag, setAllTag] = useState([]);
   const [allExam, setAllExam] = useState([]);
   const [title, setTitle] = useState(
      categoryId ? "Thể loại" : tagId ? "Thẻ" : "Tất cả"
   );
   const [key, setKey] = useState(
      categoryId ? "category" : tagId ? "tag" : "all"
   );

   const [openKeys, setOpenKeys] = useState(
      categoryId ? ["category"] : tagId ? ["tag"] : [""]
   );
   const [isLoading, setIsLoading] = useState(true);

   useEffect(() => {
      const fetchSider = async () => {
         setIsLoading(true);
         if (!categoryId && !tagId) {
            setKey(`all`);
            Promise.all([
               getAllCategory(),
               getAllTag(),
               getAllExercises(),
            ]).then((values) => {
               setAllCategory(values[0].data.categories);
               setAllTag(values[1].data.categories);
               setAllExam(values[2].data.exercises);
               setTitle(`Tất cả`);
               setIsLoading(false);
            });
         } else if (categoryId) {
            setKey(`category/${categoryId}`);
            setOpenKeys([`category`]);
            Promise.all([
               getAllCategory(),
               getAllTag(),
               getAllByCategory(categoryId),
            ]).then((values) => {
               setAllCategory(values[0].data.categories);
               setAllTag(values[1].data.categories);
               setAllExam(values[2].data.exercises);
               const currentCategory = values[0].data.categories.find(
                  (category) => category.id === parseInt(categoryId)
               );
               setTitle(`Thể loại: ${currentCategory.title}`);
               setIsLoading(false);
            });
         } else if (tagId) {
            setKey(`tag/${tagId}`);
            setOpenKeys([`tag`]);
            Promise.all([
               getAllCategory(),
               getAllTag(),
               getAllByTag(tagId),
            ]).then((values) => {
               setAllCategory(values[0].data.categories);
               setAllTag(values[1].data.categories);
               setAllExam(values[2].data.exercises);
               const currentTag = values[1].data.categories.find(
                  (tag) => tag.id === parseInt(tagId)
               );
               setTitle(`Thẻ: ${currentTag.title}`);
               setIsLoading(false);
            });
         }
      };
      fetchSider();
   }, [categoryId, tagId]);

   return (
      <Layout>
         <Sider className="site-layout-background" width={250}>
            <Menu
               style={{ minHeight: "100%", paddingTop: "30px" }}
               selectedKeys={[key]}
               defaultSelectedKeys={[key]}
               defaultOpenKeys={openKeys}
               mode="inline"
            >
               <Menu.Item icon={<UnorderedListOutlined />} key="all">
                  <Link to={`/user/exam-paper/`}>Tất cả</Link>
               </Menu.Item>
               <SubMenu key="category" icon={<TagsOutlined />} title="Loại đề">
                  {allCategory.map((category, i) => (
                     <Menu.Item key={`category/${category.id}`}>
                        <Link to={`/user/exam-paper/category/${category.id}`}>
                           {category.title}{" "}
                        </Link>
                     </Menu.Item>
                  ))}
               </SubMenu>
               <SubMenu key="tag" icon={<TagOutlined />} title="Thẻ">
                  {allTag.map((tag) => (
                     <Menu.Item key={`tag/${tag.id}`}>
                        <Link to={`/user/exam-paper/tag/${tag.id}`}>
                           {tag.title}
                        </Link>
                     </Menu.Item>
                  ))}
               </SubMenu>
            </Menu>
         </Sider>
         <Content style={{ display: "flex", flexDirection: "column" }}>
            <div className="exam-paper">
               <div className="exam-paper-content">
                  <h1 className="exam-paper__category">{title}</h1>
                  <Divider />
                  {isLoading ? (
                     <Loading />
                  ) : (
                     <ul className="exam-list">
                        {allExam.map((exam) => (
                           <li className="exam-item" key={exam.id}>
                              <Link to={`/user/exam/${exam.id}`}>
                                 <Card className="card">
                                    <div className="card__header">
                                       <p className="card__name">
                                          {exam.title}
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
                                          {exam.duration} Phút
                                       </p>
                                       {/* <p className="card__question">
                                       <QuestionCircleOutlined
                                          style={{ marginRight: "5px" }}
                                       />
                                       {exam.questions.length} Câu
                                    </p> */}
                                    </div>
                                 </Card>
                              </Link>
                           </li>
                        ))}
                     </ul>
                  )}

                  {/* <div className="pagination">
                     <Pagination defaultCurrent={1} total={50} />
                  </div> */}
               </div>
            </div>
         </Content>
      </Layout>
   );
};

export default ExamPaper;
