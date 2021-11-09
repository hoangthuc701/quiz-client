import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Form, Input, Button } from "antd";
import { forgotPassword } from "../../slice/userAuthSlice";
import "./style.css";

const ForgotPassword = () => {
   const dispatch = useDispatch();
   const [isSentSuccess, setSentSuccess] = useState(false);
   const onFinish = (values) => {
      const data = {
         email: values.email,
      };
      dispatch(
         forgotPassword(
            data,
            ()=>{
                setSentSuccess(true);
            },
            () => {}
         )
      );
   };

   if (!isSentSuccess){
    return (
        <div className="login-container">
           <div className="login">
              <h1 className="title">Đặt lại mật khẩu của bạn</h1>
              <Form
                 name="basic"
                 labelCol={{ span: 24 }}
                 wrapperCol={{ span: 24 }}
                 initialValues={{ remember: true }}
                 onFinish={onFinish}
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
                    <Input />
                 </Form.Item>
                 <div className="submit">
                    <Button type="primary" htmlType="submit">
                       Gửi email ngay
                    </Button>
                 </div>
              </Form>
           </div>
        </div>
     );
   }

   return (
    <div className="login-container">
        <div className="login">
            <h1 className="title">Kiểm tra hộp thư !!!</h1>
            <p className="description"> Kiểm tra email của bạn để tiếp tục thao tác </p>
        </div>
    </div>
   )
};

export default ForgotPassword;
