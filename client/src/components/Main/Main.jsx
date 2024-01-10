import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home"
import Cups from "./InfoClient/Cups";
import DataClient from "./InfoClient/DataClient";
import Power from "./Invoice/Power/Power";

const Main = () => {
  return <main>
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/cups" element={<Cups />} />
      <Route path="/client" element={<DataClient />} />
      <Route path="/power" element={<Power />} />
    </Routes>



  </main>;
};

export default Main;
