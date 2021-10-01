import React from "react";
import { Result, Button } from "antd";
import { useHistory } from "react-router-dom";

const Error = () => {
  const history = useHistory();
  const handleClick = () =>{
    history.replace('/');
  }
  return (
    <Result
      status="404"
      title="404"
      subTitle="Nội dung không tồn tại!"
      extra={<Button type="primary" onClick={handleClick}>Về trang chủ</Button>}
    />
  );
};

export default Error;
