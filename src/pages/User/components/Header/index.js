import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { useSelector } from "react-redux";
import { isAdmin } from "../../../../utils";

const Header = () => {
  const user = useSelector((state) => state.userAuth.user);
  return (
    <>
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link className="navbar-brand" to="/">
              KQuiz
            </Link>
          </div>
          <ul className="nav navbar-nav">
            <li className="active">
              <Link to="#">Trang chủ</Link>
            </li>
            <li>
              <Link to="#">Page 1</Link>
            </li>
            <li>
              <Link to="#">Page 2</Link>
            </li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            {!user && (
              <>
                <li>
                  <Link to="/user/register">Đăng ký</Link>
                </li>
                <li>
                  <Link to="/user/login">Đăng nhập</Link>
                </li>
              </>
            )}
            {user && isAdmin() && (
              <li>
                <Link to="/admin/overview"> Trang quản trị</Link>
              </li>
            )}
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
    </>
  );
};

export default Header;
