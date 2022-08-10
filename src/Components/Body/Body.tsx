import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";

function Body() {
  return (
    <BrowserRouter>
      <div /*className={styles.body}*/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default Body;
