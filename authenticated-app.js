import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./src/pages/home";

function AuthenticatedApp() {
  return (
    <div id="ebazar-layout" className="theme-blue">
      <SideBar />
      <div className="main px-lg-4 px-md-4">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          {/*<Route path="*" element={<NotFound />} />*/}
        </Routes>
      </div>
    </div>
  );
}

export default AuthenticatedApp;