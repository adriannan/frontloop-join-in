import React from "react";
import logo from "../images/logo.png";
import "../styles/login.css";

const RegisterPage = props => {
  return (
    <section className="content__register">
      <h3 className="register__logo">
        Join<img src={logo}></img>
      </h3>
      <h2 className="register__tit">Make the most of your professional life</h2>
      <form className="register__form">
        <label>
          First name: <input type="text"></input>
          {/* <p className="form-error">Niepoprawna nazwa uytkownika</p> */}
        </label>
        <label>
          Last name: <input type="text"></input>
        </label>
        <label>
          Email: <input type="mail"></input>
        </label>
        <label>
          Password: <input type="password"></input>
        </label>
        <label>
          Confirm password: <input type="password"></input>
        </label>
        <p className="form__privacy">
          You agree to the LinkedIn User Agreement, Privacy Policy, and Cookie
          Policy.
        </p>
        <button className="register__btn">Agree &amp; Join</button>
      </form>
      <p className="form__footer">
        Already on JoinIn? <a href="/login">Sing in</a>
      </p>
    </section>
  );
};

export default RegisterPage;
