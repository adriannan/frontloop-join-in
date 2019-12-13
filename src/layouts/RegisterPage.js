import React, { Component } from "react";
import logo from "../images/logo.png";
import "../styles/login.css";

class RegisterPage extends Component {
  state = {
    username: "",
    userLastname: "",
    email: "",
    password: "",
    passwordConf: "",
    correct: false,
    errors: {
      username: false,
      userLastname: false,
      email: false,
      password: false,
      password_length: false,
      passwordConf: false
    }
  };
  alerts = {
    username_alert: "Field is required",
    userLastname_alert: "Field is required",
    email_alert: "Please, enter a valid email address",
    password_alert: "Password is required",
    password_length_alert: "Password is too short (min. 8 characters)",
    // passwordConf_alert: "Confirmation failed",
    passwordConf_alert: "Confirmation doesn't match"
  };

  handleChange = e => {
    // console.log(e.target.name);
    // console.log(e.target.type);
    const value = e.target.value;
    const name = e.target.name;
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
        userLastname: "",
        email: "",
        password: "",
        passwordConf: "",
        correct: true,
        errors: {
          username: false,
          userLastname: false,
          email: false,
          password: false,
          password_length: false,
          passwordConf: false
        }
      });
    } else {
      this.setState({
        errors: {
          username: !validation.username,
          userLastname: !validation.userLastname,
          email: !validation.email,
          password: !validation.password,
          password_length: !validation.password_length,
          passwordConf: !validation.passwordConf
        }
      });
    }
  };
  formValidation = () => {
    let username = false,
      userLastname = false,
      email = false,
      password = false,
      password_length = false,
      passwordConf = false,
      correct = false;
    if (
      this.state.username.length > 0 &&
      this.state.username.indexOf(" ") == -1
    ) {
      username = true;
    }
    if (
      this.state.userLastname.length > 0 &&
      this.state.userLastname.indexOf(" ") == -1
    ) {
      userLastname = true;
    }
    if (
      this.state.email.indexOf("@") !== -1 &&
      this.state.email.indexOf(".") !== -1
    ) {
      email = true;
    }
    if (this.state.password.length !== 0) {
      password = true;
    }
    if (this.state.password.length >= 8 || this.state.password.length == 0) {
      password_length = true;
    }
    if (this.state.password === this.state.passwordConf) {
      passwordConf = true;
    }
    if (
      username &&
      userLastname &&
      email &&
      password &&
      password_length &&
      passwordConf
    ) {
      correct = true;
    }
    return {
      correct,
      username,
      userLastname,
      email,
      password,
      password_length,
      passwordConf
    };
  };
  componentDidUpdate() {
    if (this.state.correct) {
      setTimeout(() => {
        this.setState({
          correct: false
        });
      }, 5000);
    }
  }

  render() {
    return (
      <section className="content__register">
        <h3 className="register__logo">
          Join<img src={logo}></img>
        </h3>
        <h2 className="register__tit">
          Make the most of your professional life
        </h2>
        <form className="register__form" onSubmit={this.handleSubmit}>
          <label>
            First name:{" "}
            <input
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
            ></input>
            {this.state.errors.username && (
              <p className="form-error">{this.alerts.username_alert}</p>
            )}
          </label>
          <label>
            Last name:{" "}
            <input
              type="text"
              name="userLastname"
              value={this.state.userLastname}
              onChange={this.handleChange}
            ></input>
            {this.state.errors.userLastname && (
              <p className="form-error">{this.alerts.userLastname_alert}</p>
            )}
          </label>
          <label>
            Email:{" "}
            <input
              type="mail"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            ></input>
            {this.state.errors.email && (
              <p className="form-error">{this.alerts.email_alert}</p>
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
          <label>
            Confirm password:{" "}
            <input
              type="password"
              name="passwordConf"
              value={this.state.passwordConf}
              onChange={this.handleChange}
            ></input>
            {this.state.errors.passwordConf && (
              <p className="form-error">{this.alerts.passwordConf_alert}</p>
            )}
          </label>
          {this.state.correct ? (
            <h2 style={{ textAlign: "center", color: "#09589e" }}>
              Welcome to JoinIn!
            </h2>
          ) : (
            <>
              {" "}
              <p className="form__privacy">
                You agree to the LinkedIn User Agreement, Privacy Policy, and
                Cookie Policy.
              </p>
              <button className="register__btn">Agree &amp; Join</button>
            </>
          )}
        </form>
        <p className="form__footer">
          Already on JoinIn? <a href="/login">Sing in</a>
        </p>
      </section>
    );
  }
}

export default RegisterPage;
