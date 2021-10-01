import React from "react";
import { useDispatch } from "react-redux";
import { Form, Input, Button } from "antd";
import { signUp } from "../../slice/userAuthSlice";

const Register = () => {
  const dispatch = useDispatch();
  const onFinish = (values) => {
    const registerData = {
      username: "",
      password: "",
      fullname: "",
    };
    dispatch(signUp(registerData));
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      autoComplete="off"
      style={{ width: "400px" }}
    >
      <Form.Item
        label="Tên đăng nhập"
        name="username"
        rules={[{ required: true, message: "Vui lòng nhập tên đăng nhập!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Mật khẩu"
        name="password"
        rules={[{ required: true, message: "Vui lòng nhập mật khẩu!" }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        label="Nhập lại mật khẩu"
        name="repassword"
        rules={[{ required: true, message: "Vui lòng nhập lại mật khẩu!" }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        label="Họ tên"
        name="fullname"
        rules={[{ required: true, message: "Vui lòng nhập họ tên!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Đăng ký
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Register;
