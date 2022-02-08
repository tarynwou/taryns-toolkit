import React from "react";
import { Outlet } from "react-router-dom";

function Box() {
  return (
    <div className="home">
      <div class="container" id="empty-page">
        <h1 className="text-center mt-5">The Box</h1>
        {/* <Outlet /> */}
        <p className="page-descriptions">Coming soon...</p>
      </div>
    </div>
  );
}

export default Box;
