import React from "react";
import { Layout } from "antd";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const HeaderComponent = () => {
  const user = useSelector((state) => state.userAuth.user);

  return (
    <div style={{padding: "0", position: "fixed", zIndex: 1, width: "100%", height:"10px"}}>
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <Link className="navbar-brand" to="/" >
                KQuiz
              </Link>
            </div>

            <ul className="nav navbar-nav navbar-right">
              {user && (
                <>
                  <li>
                    <Link to="/user/profile"> {user.fullname}</Link>
                  </li>
                  <li>
                    <Link to="/user/logout">Đăng xuất</Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </nav>
    </div>
  );
};

export default HeaderComponent;