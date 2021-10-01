import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Form, Input, Button } from "antd";
import { signIn } from "../../slice/userAuthSlice";

const Login = () => {
  const dispatch = useDispatch();
  let history = useHistory();
  const onFinish = (values) => {
    const loginData = {
      username: "",
      password: "",
    };
    dispatch(
      signIn(
        loginData,
        () => {
          history.push("/");
        },
        () => {}
      )
    );
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

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Đăng nhập
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Login;
