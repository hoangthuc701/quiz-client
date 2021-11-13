import React, { useEffect, useState } from "react";
import { Avatar, Form, Input, Button, Tabs } from "antd";
import { UserOutlined } from "@ant-design/icons";
import {
  updatePassword,
  updateUserInformation,
  getUserInformation,
} from "../../slice/userAuthSlice";
import { useDispatch } from "react-redux";
import "./style.css";

const { TabPane } = Tabs;

const Profile = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const [user, setUser] = useState({});

  useEffect(() => {
    dispatch(
      getUserInformation(
        (data) => {
          form.setFieldsValue(data.user);
          setUser(data.user);
        },
        () => {}
      )
    );
  }, [dispatch, form]);
  const onFinish2 = (values) => {
    const resetData = {
      password: values.password,
      confirmPassword: values.confirmPassword,
      oldPassword: values.oldPassword,
    };
    dispatch(
      updatePassword(
        resetData,
        () => {},
        () => {}
      )
    );
  };

  const handleChangeAvatar = (e) => {
    e.preventDefault();
    const fileInput = document.getElementById("file-selector");
    fileInput.click();
  };

  const handleUploadAvatar = (e) => {
    const fileInput = document.getElementById("file-selector");
    const file = fileInput.files[0];
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "docs_upload_example_us_preset");

    const url = "https://api.cloudinary.com/v1_1/demo/image/upload";
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const updateData = {
          fullname: user.fullname,
          phone: user.phone,
          description: user.description,
          avatarUrl: data.secure_url,
        };
        dispatch(
          updateUserInformation(
            updateData,
            () => {
              setUser({
                ...user,
                avatarUrl: data.secure_url,
              });
              let userAuth = JSON.parse(sessionStorage.getItem("userAuth"));
              userAuth.user.avatarUrl = data.secure_url;
              sessionStorage.setItem("userAuth", JSON.stringify(userAuth));
            },
            () => {}
          )
        );
      });
  };

  const onFinish1 = (values) => {
    const data = {
      fullname: values.fullname,
      phone: values.phone,
      description: values.description,
      avatarUrl: user.avatarUrl,
    };
    dispatch(
      updateUserInformation(
        data,
        () => {
          let userAuth = JSON.parse(sessionStorage.getItem("userAuth"));
          userAuth.user.description = data.description;
          userAuth.user.fullname = data.fullname;
          userAuth.user.phone = data.phone;
          sessionStorage.setItem("userAuth", JSON.stringify(userAuth));
          
          setUser({
            ...user,
            fullname: data.fullname,
            description: data.description,
          });

        },
        () => {}
      )
    );
  };

  return (
    <div className="profile-container">
      <div className="avatar-information">
        <div className="user-avatar">
          <Avatar
            shape="square"
            size={200}
            icon={<UserOutlined />}
            src={user.avatarUrl}
          />
          <Button
            id="update-avatar-button"
            type="primary"
            onClick={handleChangeAvatar}
          >
            Cập nhật ảnh đại diện
          </Button>
          <input
            id="file-selector"
            type="file"
            style={{ opacity: 0, width: 0, height: 0 }}
            onChange={handleUploadAvatar}
          ></input>
        </div>
        <div className="user-information">
          <div className="username">{user.fullname}</div>
          <div className="user-description">{user.description}</div>
        </div>
      </div>
      <div className="tab-information">
        <Tabs defaultActiveKey="1">
          <TabPane tab="Thông tin cá nhân" key="1">
            <Form
              form={form}
              name="basic"
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
              onFinish={onFinish1}
              autoComplete="off"
            >
              <Form.Item
                className="form-item"
                label="Email"
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập email!",
                  },
                ]}
              >
                <Input disabled={true} />
              </Form.Item>

              <Form.Item
                className="form-item"
                label="Họ tên"
                name="fullname"
                rules={[{ required: true, message: "Vui lòng nhập họ tên!" }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                className="form-item"
                label="Điện thoại"
                name="phone"
                rules={[
                  { required: true, message: "Vui lòng nhập số điện thoại!" },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                className="form-item"
                label="Mô tả"
                name="description"
                rules={[{ required: true, message: "Vui lòng nhập mô tả!" }]}
              >
                <Input.TextArea />
              </Form.Item>

              <div className="submit">
                <Button type="primary" htmlType="submit">
                  Cập nhật thông tin
                </Button>
              </div>
            </Form>
          </TabPane>
          <TabPane tab="Thay đổi mật khẩu" key="2">
            <Form
              name="basic"
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
              initialValues={{ remember: true }}
              onFinish={onFinish2}
              autoComplete="off"
            >
              <Form.Item
                className="form-item"
                label="Mật khẩu hiện tại"
                name="oldPassword"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập mật khẩu hiện tại!",
                  },
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item
                className="form-item"
                label="Mật khẩu"
                name="password"
                rules={[
                  { required: true, message: "Vui lòng nhập mật khẩu mới!" },
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item
                className="form-item"
                label="Nhập lại mật khẩu"
                name="confirmPassword"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập lại mật khẩu mới!",
                  },
                ]}
              >
                <Input.Password />
              </Form.Item>
              <div className="submit">
                <Button type="primary" htmlType="submit">
                  Cập nhật mật khẩu
                </Button>
              </div>
            </Form>
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
};

export default Profile;
