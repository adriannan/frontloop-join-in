import React from "react";
import logo from "../images/logo.png";
import "../styles/login.css";

const LoginPage = props => {
  return (
    <section className="content__login">
      <h3 className="login__logo">
        Join<img src={logo}></img>
      </h3>
      <h2 className="login__tit">Welcome Back</h2>
      <p className="login__subtit">
        Don't miss your next opportunity. Sign in to stay updated on your
        professional world.
      </p>
      <form className="login__form">
        <label>
          Email or Phone: <input type="text"></input>
        </label>
        <label>
          Password: <input type="password"></input>
        </label>
        <button className="login__btn">Sign in</button>
      </form>
      <p className="form__footer">
        New to JoinIn? <a href="/register">Join now</a>
      </p>
    </section>
  );
};

export default LoginPage;
