import React from "react";
import Signup_Content_0 from "../components/content/Signup_Content_0";
import Signup_Form_0 from "../components/form/Signup_Form_0";
import "../scss/pages/_signup.scss";

const Signup = () => {
  return (
    <section className="signup-section" aria-label="Signup for Gold Spa">
      <div className="signup-container grid grid-two-cols">
        <Signup_Content_0 />
        <Signup_Form_0 />
      </div>
    </section>
  );
};

export default Signup;
