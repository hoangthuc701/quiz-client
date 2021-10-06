import React, { useEffect } from "react";
import { Table, Space, Button, Popconfirm, Tag } from "antd";
import { getAllQuizzes, deleteQuizzes } from "../../slice/quizzesSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Quizzes = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllQuizzes());
  }, [dispatch]);

  const handleDelete = (record) => {
    let data = { id: record.id, active: false };
    dispatch(
      deleteQuizzes(
        data,
        () => {},
        () => {}
      )
    );
  };

  const columns = [
    {
      title: "Tiêu đề",
      dataIndex: "title",
      key: "title",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "Mô tả",
      dataIndex: "description",
      key: "description",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "Danh mục",
      dataIndex: "category",
      key: "category",
      render: (category) => <p>{category.title}</p>,
    },
    {
      title: "Nhãn",
      dataIndex: "tags",
      key: "tags",
      render: (tags) =>
        tags.map((tag) => (
          <Tag color="magenta" style={{ margin: "5px" }}>
            {tag.title}
          </Tag>
        )),
    },
    {
      title: "Hành động",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Link to={`/admin/quizzes/${record.id}/view`}>
            <Button>Xem đề thi</Button>
          </Link>
          <Link to={`/admin/quizzes/${record.id}/edit`}>
            <Button type="primary">Chỉnh sửa</Button>
          </Link>

          <Popconfirm
            title="Bạn có chắc chắn muốn xóa mục này?"
            onConfirm={() => handleDelete(record)}
          >
            <Button type="primary" danger>
              Xóa
            </Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  const data = useSelector((state) => state.quizzes.exercises);

  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h1> Quản lý đề thi </h1>
        <Link to="/admin/quizzes/new">
          <Button type="primary" style={{ margin: "5px" }}>
            Thêm đề thi
          </Button>
        </Link>
      </div>

      <Table columns={columns} dataSource={data} />
    </>
  );
};

export default Quizzes;
