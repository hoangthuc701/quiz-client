import React from "react";
import "./style.css";

const Home = () => {
  return (
    <div className="homepage-container">
      <div className="introduce">
        <div className="left">
          <h1>
            {" "}
            The online quiz maker that's easy to use, fun and fully customizable
          </h1>
          <p>
            {" "}
            A quiz that engages students, generates leads or promotes your
            brand.
          </p>
        </div>
        <div className="right">
          <img
            alt=""
            src="https://wpmanageninja.com/wp-content/uploads/2018/11/Create-Quizzes-Easily-with-a-WordPress-Form-Plugin.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
