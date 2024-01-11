import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home"
import Cups from "./InfoClient/Cups";
import DataClient from "./InfoClient/DataClient";
import Login from "./Login";
import Register from "./Register";

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/cups" element={<Cups />} />
        <Route path="/client" element={<DataClient />} />
        <Route path='/' element={<Login />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </main>
  )

};

export default Main;
