import React from "react";
import { Route } from "react-router-dom";
import Posts from "../components/Posts";
import Background from "../components/Background";
import Recommendations from "../components/Recommendations";
import Following from "../components/Following";

const Content = () => {
  return (
    <>
      <Route path="/" exact component={Posts} />
      <Route path="/background" component={Background} />
      <Route path="/recommendations" component={Recommendations} />
      <Route path="/following" component={Following} />
    </>
  );
};

export default Content;
