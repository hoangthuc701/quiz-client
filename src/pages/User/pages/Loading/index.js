import React from "react";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import "./style.css";

const antIcon = <LoadingOutlined style={{ fontSize: 44 }} spin />;

function Loading(props) {
   return (
      <div className="loading">
         <Spin indicator={antIcon} className="loadingIcon" />
      </div>
   );
}

export default Loading;
