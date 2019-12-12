import React, { Component } from "react";
import "../styles/App.css";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Error from "./Error";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";

const permission = false;

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <header>{<Header />}</header>
          <Switch>
            <Route
              path={"/(|background|following|recommendations)/"}
              component={Home}
            />
            <Route
              path="/profile"
              render={() => (permission ? Home : <Redirect to={"/login"} />)}
            />
            <Route
              path="/connections"
              render={() => (permission ? Home : <Redirect to={"/login"} />)}
            />
            <Route
              path="/interest"
              render={() => (permission ? Home : <Redirect to={"/login"} />)}
            />

            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={RegisterPage} />
            <Route component={Error} />
          </Switch>
          <footer>{<Footer />}</footer>
        </div>
      </Router>
    );
  }
}

export default App;
