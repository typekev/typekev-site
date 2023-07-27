import React from "react";
import Nav from "./Nav";

const Main = (props) => (
  <div>
    <Nav />
    <div className="text-center">
      <div>{props.children}</div>
    </div>
  </div>
);

export default Main;
