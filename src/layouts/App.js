import React, { Component } from "react";
import "../styles/App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Error from "./Error";

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
            <Route component={Error} />
          </Switch>
          <footer>{<Footer />}</footer>
        </div>
      </Router>
    );
  }
}

export default App;
