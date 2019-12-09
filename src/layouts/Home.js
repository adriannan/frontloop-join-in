import React from "react";
import Navigation from "./Navigation";
import ProfileInfo from "./ProfileInfo";
import Aside from "./Aside";
import Content from "./Content";
const Home = () => {
  return (
    <>
      <nav className="main__nav">{<Navigation />}</nav>
      <main>
        <aside className="aside-left">{<ProfileInfo />}</aside>
        <section className="content">{<Content />}</section>
        <aside className="aside-right">{<Aside />}</aside>
      </main>
    </>
  );
};

export default Home;
