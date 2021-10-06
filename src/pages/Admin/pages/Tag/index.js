import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Table, Space, Button, Popconfirm, Modal, Form, Input } from "antd";
import { tagActions } from "../../slice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const Tag = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalData, setModalData] = useState({
    title: "Thêm mới nhãn",
    body: {},
    visible: false,
    isEdit: false,
  });

  const handleOk = () => {
    const data = form.getFieldValue();
    setConfirmLoading(true);
    const tagAction = modalData.isEdit
      ? tagActions.updateTag
      : tagActions.addTag;

    dispatch(
      tagAction(
        data,
        () => {
          setModalData({ visible: false, isEdit: false });
          setConfirmLoading(false);
        },
        () => {
          setConfirmLoading(false);
        }
      )
    );
  };

  useEffect(() => {
    dispatch(tagActions.getAllTag());
  }, [dispatch]);

  const handleCancel = () => {
    setModalData({
      visible: false,
      isEdit: false,
    });
  };

  const handleEdit = (record) => {
    setModalData({
      title: "Cập nhật nhãn",
      body: { ...record },
      visible: true,
      isEdit: true,
    });
  };

  const handleAdd = () => {
    setModalData({
      title: "Thêm mới nhãn",
      body: {
        title: "",
        description: "",
      },
      visible: true,
      isEdit: false,
    });
  };

  useEffect(() => {
    form.setFieldsValue(modalData.body);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [modalData.body]);

  const handleDelete = (record) => {
    const data = record;
    dispatch(tagActions.deleteTag(data));
  };
  const columns = [
    {
      title: "Tên nhãn",
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
      title: "Người tạo",
      dataIndex: "creator",
      key: "creator",
      render: (user) => (
        <Link to={`/user/profile/${user?.id}`}>{user?.fullname}</Link>
      ),
    },
    {
      title: "Hành động",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Button type="primary" onClick={() => handleEdit(record)}>
            Chỉnh sửa
          </Button>

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

  const data = useSelector((state) => state.tag.tags);

  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h1> Quản lý nhãn </h1>
        <Button type="primary" style={{ margin: "5px" }} onClick={handleAdd}>
          Thêm mới nhãn
        </Button>
      </div>

      <Table columns={columns} dataSource={data} />
      <Modal
        title={modalData.title}
        visible={modalData.visible}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <Form
          name="tag"
          form={form}
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
        >
          <Form.Item
            label="Tên nhãn"
            name="title"
            rules={[{ required: true, message: "Nhập tên nhãn!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Mô tả"
            name="description"
            rules={[{ required: true, message: "nhập mô tả nhãn!" }]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default Tag;
