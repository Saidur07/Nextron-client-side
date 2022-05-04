import React from "react";
import "./Loader.css";

const Loader = () => {
  return (
    <div className="loader mx-auto my-4">
      <span className="hour"></span>
      <span className="min"></span>
      <span className="circel"></span>
    </div>
  );
};

export default Loader;
