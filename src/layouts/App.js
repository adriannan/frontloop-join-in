import React, { Component } from "react";
import "../styles/App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./Header";

import Footer from "./Footer";
import Home from "./Home";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <header>{<Header />}</header>
          <Route
            path={"/(|background|following|recommendations)/"}
            component={Home}
          />
          <footer>{<Footer />}</footer>
        </div>
      </Router>
    );
  }
}

export default App;
