import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import "../styles/login.css";

class LoginPage extends Component {
  state = {
    username: "",
    password: "",
    errors: {
      username: false,
      username_length: false,
      password: false,
      password_length: false
    }
  };
  alerts = {
    username_alert: "Incorrect email, phone number or password",
    username_length_alert: "Field is required",
    password_alert: "Incorrect password",
    password_length_alert: "Password is required"
  };
  handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    const validation = this.formValidation();
    if (validation.correct) {
      this.setState({
        username: "",
        password: ""
      });
    } else {
      this.setState({
        errors: {
          username: !validation.username,
          username_length: !validation.username_length,
          password: !validation.password,
          password_length: !validation.password_length
        }
      });
    }
  };
  formValidation = () => {
    let username = false,
      username_length = false,
      password = false,
      password_length = false,
      correct = false;
    if (this.state.username.length !== 0) {
      username_length = true;
    }
    if (this.state.username === "") {
      username = true;
      console.log(this.state.username);
    }
    if (this.state.password.length !== 0) {
      password_length = true;
    }
    if (this.state.password === "") {
      password = true;
    }
    if (username && username_length && password && password_length) {
      correct = true;
    }
    return { username, username_length, password, password_length, correct };
  };
  render() {
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
        <form className="login__form" onSubmit={this.handleSubmit}>
          <label>
            Email or Phone:{" "}
            <input
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
            ></input>
            {this.state.errors.username && (
              <p className="form-error">{this.alerts.username_alert}</p>
            )}
            {this.state.errors.username_length && (
              <p className="form-error">{this.alerts.username_length_alert}</p>
            )}
          </label>
          <label>
            Password:{" "}
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            ></input>
            {this.state.errors.password && (
              <p className="form-error">{this.alerts.password_alert}</p>
            )}
            {this.state.errors.password_length && (
              <p className="form-error">{this.alerts.password_length_alert}</p>
            )}
          </label>
          <button className="login__btn">Sign in</button>
        </form>
        <p className="form__footer">
          New to JoinIn? <Link to="/register">Join now</Link>
        </p>
      </section>
    );
  }
}

export default LoginPage;
