import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../screens/Home";
import Albums from "../screens/Albums";

const Router = () => {
  return (
    <div className="bg-cyan-100 w-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/albums/:albumId" element={<Albums />} />
      </Routes>
    </div>
  );
};

export default Router;
