import { Layout, Menu } from "antd";
import { UserOutlined, VideoCameraOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const SiderComponent = () => {
  const { Sider } = Layout;
  const { SubMenu } = Menu;

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
      path: "/admin/quizzes",
    },
    {
      key: "4",
      path: "#",
    },
    {
      key: "4-1",
      path: "#",
    },
    {
      key: "4-2",
      path: "#",
    },
  ];

  const getDefaultSelectedKey = () => {
    const path = window.location.pathname;
    const key = siders.find((sider) => path.includes(sider.path) >= 0).key;

    return key;
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
        <Menu.Item key="3" icon={<VideoCameraOutlined />}>
          <Link to="/admin/quizzes"> Đề thi </Link>
        </Menu.Item>
        <SubMenu key="sub9" icon={<UserOutlined />} title="subnav 9">
          <Menu.Item key="9-1">option1</Menu.Item>
          <Menu.Item key="9-2">option2</Menu.Item>
          <Menu.Item key="9-3">option3</Menu.Item>
          <Menu.Item key="9-4">option4</Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  );
};

export default SiderComponent;
