import React from "react";
import { Outlet } from "react-router-dom";

function Box() {
  return (
    <div className="home">
      <div class="container">
        <h1 className="text-center mt-5">The Box</h1>
        <Outlet />
      </div>
    </div>
  );
}

export default Box;