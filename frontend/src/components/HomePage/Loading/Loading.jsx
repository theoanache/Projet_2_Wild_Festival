import React from "react";
import picto from "../assets/picto-wild-festival.png";
import logo from "../assets/logo-text-only.png";
import "./Loading.css";

const Loading = () => {
  return (
    <div className="loading">
      <img src={picto} className="App-logo" alt="picto" />
      <img src={logo} className="logo" alt="logo" />
    </div>
  );
};

export default Loading;
