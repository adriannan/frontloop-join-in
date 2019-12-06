import React, { Component } from "react";
import "../styles/App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./Header";
import Navigation from "./Navigation";
import ProfileInfo from "./ProfileInfo";
import Aside from "./Aside";
import Content from "./Content";
import Footer from "./Footer";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <header>{<Header />}</header>
          <nav className="main__nav">{<Navigation />}</nav>
          <main>
            <aside className="aside-left">{<ProfileInfo />}</aside>
            <section className="content">{<Content />}</section>
            <aside className="aside-right">{<Aside />}</aside>
          </main>
          <footer>{<Footer />}</footer>
        </div>
      </Router>
    );
  }
}

export default App;
