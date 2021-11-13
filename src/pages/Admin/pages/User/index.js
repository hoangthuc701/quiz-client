import React, { useEffect } from "react";
import { Table, Space, Button, Tag } from "antd";
import { getAllUser, updateUserInformation } from "../../slice/usersSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const UserManagement = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUser());
  }, [dispatch]);

  const handleChangeStatus = (record) => {
    let data = { ...record };
    data.active = !data.active;
    dispatch(
      updateUserInformation(
        data,
        () => {},
        () => {}
      )
    );
  };
  const columns = [
    {
      title: "Tên người dùng",
      dataIndex: "fullname",
      key: "fullname",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "Vai trò",
      dataIndex: "role",
      key: "role",
      render: (text) => {
        if (text === 1) {
          return <Tag color="volcano">Người dùng thường</Tag>;
        }

        if (text === 2) {
          return <Tag color="green">Người tạo đề </Tag>;
        }
      },
    },
    {
      title: "Hành động",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Button type="primary">
            <Link to={`/admin/user/${record.id}`}> Xem thông tin</Link>
          </Button>

          <Button
            type={record.active ? "danger" : "default"}
            onClick={() => handleChangeStatus(record)}
          >
            {record.active === true && "Khóa"}
            {record.active !== true && "Mở khóa"}
          </Button>
        </Space>
      ),
    },
  ];

  const data = useSelector((state) => state.users.users);

  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h1> Quản lý người dùng </h1>
      </div>

      <Table columns={columns} dataSource={data} />
    </>
  );
};

export default UserManagement;
