import { Layout, Menu } from "antd";
import {
  UserOutlined,
  VideoCameraOutlined,
  TagsOutlined,
  GroupOutlined,
} from "@ant-design/icons";
import { isCreator, isAdmin } from "../../../../utils/index";
import { Link } from "react-router-dom";

const SiderComponent = () => {
  const { Sider } = Layout;

  const siders = [
    {
      key: "1",
      path: "/admin/overview",
    },
    {
      key: "2",
      path: "/admin/category",
    },
    {
      key: "3",
      path: "/admin/tag",
    },
    {
      key: "4",
      path: "/admin/quizzes",
    },
    {
      key: "5",
      path: "/admin/user",
    },
  ];

  const getDefaultSelectedKey = () => {
    const path = window.location.pathname;
    let page = siders.find((sider) => path.includes(sider.path));
    if (!page) {
      page = 1;
    }

    return page.key;
  };

  return (
    <Sider
      style={{
        overflow: "auto",
        height: "100vh",
        position: "fixed",
        left: 0,
        top: "48px",
      }}
    >
      {isAdmin() && (
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={() => getDefaultSelectedKey()}
        >
          <Menu.Item key="1" icon={<UserOutlined />}>
            <Link to="/admin/overview"> Tổng quan </Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            <Link to="/admin/category"> Danh mục </Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<TagsOutlined />}>
            <Link to="/admin/tag"> Tag </Link>
          </Menu.Item>
          <Menu.Item key="4" icon={<VideoCameraOutlined />}>
            <Link to="/admin/quizzes"> Đề thi </Link>
          </Menu.Item>
          <Menu.Item key="5" icon={<GroupOutlined />}>
            <Link to="/admin/user"> Người dùng </Link>
          </Menu.Item>
        </Menu>
      )}

      {isCreator() && (
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={() => getDefaultSelectedKey()}
        >
           <Menu.Item key="1" icon={<UserOutlined />}>
            <Link to="/admin/overview"> Tổng quan </Link>
          </Menu.Item>
          <Menu.Item key="4" icon={<VideoCameraOutlined />}>
            <Link to="/admin/quizzes"> Đề thi </Link>
          </Menu.Item>
        </Menu>
      )}
    </Sider>
  );
};

export default SiderComponent;
