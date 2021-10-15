import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
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
   const { categoryId, tagId } = useParams();
   const { Content, Sider } = Layout;
   const { SubMenu } = Menu;
   const [allCategory, setAllCategory] = useState([]);
   const [allTag, setAllTag] = useState([]);
   const [allExam, setAllExam] = useState([]);
   const [title, setTitle] = useState("Tất cả");
   const [key, setKey] = useState("all");

   const rootSubmenuKeys = ["category", "tag"];

   const [openKeys, setOpenKeys] = useState([""]);

   const onOpenChange = (keys) => {
      const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
      if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
         setOpenKeys(keys);
      } else {
         setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
      }
   };

   const handleItemClick = (type, name, id) => {
      if (type === "all") {
         getAllExercises().then((res) => {
            setAllExam(res.data.exercises);
            setTitle(`Tất cả`);
            setKey(`all`);
            setOpenKeys([``]);
         });
      } else if (type === "category") {
         getAllByCategory(id).then((res) => {
            setAllExam(res.data.exercises);
            setTitle(`Thể loại: ${name}`);
            setKey(`category/${id}`);
         });
      } else if (type === "tag") {
         getAllByTag(id).then((res) => {
            setAllExam(res.data.exercises);
            setTitle(`Thẻ: ${name}`);
            setKey(`tag/${id}`);
         });
      }
   };

   useEffect(() => {
      const fetchSider = async () => {
         if (!categoryId && !tagId) {
            Promise.all([
               getAllCategory(),
               getAllTag(),
               getAllExercises(),
            ]).then((values) => {
               setAllCategory(values[0].data.categories);
               setAllTag(values[1].data.categories);
               setAllExam(values[2].data.exercises);
               setTitle(`Tất cả`);
               setKey(`all`);
            });
         } else if (categoryId) {
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
               setKey(`category/${categoryId}`);
               setOpenKeys([`category`]);
            });
         } else if (tagId) {
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
               setKey(`tag/${tagId}`);
               setOpenKeys([`tag`]);
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
               onOpenChange={onOpenChange}
               openKeys={openKeys}
               mode="inline"
            >
               <Menu.Item
                  icon={<UnorderedListOutlined />}
                  key="all"
                  onClick={() => handleItemClick("all")}
               >
                  Tất cả
               </Menu.Item>
               <SubMenu key="category" icon={<TagsOutlined />} title="Loại đề">
                  {allCategory.map((category) => (
                     <Menu.Item
                        key={`category/${category.id}`}
                        onClick={() =>
                           handleItemClick(
                              "category",
                              category.title,
                              category.id
                           )
                        }
                     >
                        <Link to={`/user/exam-paper/category/${category.id}`}>
                           {category.title}{" "}
                        </Link>
                     </Menu.Item>
                  ))}
               </SubMenu>
               <SubMenu key="tag" icon={<TagOutlined />} title="Thẻ">
                  {allTag.map((tag) => (
                     <Menu.Item
                        key={`tag/${tag.id}`}
                        onClick={() =>
                           handleItemClick("tag", tag.title, tag.id)
                        }
                     >
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
                  <ul className="exam-list">
                     {allExam.map((exam) => (
                        <li className="exam-item" key={exam.id}>
                           <Link to={`/user/exam/${exam.id}`}>
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
