import React from "react";
import Login_Content_0 from "../components/content/Login_Content_0";
import Login_Form_0 from "../components/form/Login_Form_0";
import "../scss/pages/_login.scss";

const Login = () => {
  return (
    <section className="login-section">
      <div className="login-container grid grid-two-cols">
        <Login_Content_0 />
        <Login_Form_0 />
      </div>
    </section>
  );
};

export default Login;
