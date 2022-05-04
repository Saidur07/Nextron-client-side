import React from "react";
import "./Loader.css";

const Loader = () => {
  return (
    <div class="loader mx-auto my-4">
      <span class="hour"></span>
      <span class="min"></span>
      <span class="circel"></span>
    </div>
  );
};

export default Loader;
