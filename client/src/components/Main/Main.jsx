import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home"
import Cups from "./InfoClient/Cups";
import DataClient from "./InfoClient/DataClient";
import Energy from "./Invoice/Energy"

const Main = () => {
  return <main>
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/cups" element={<Cups />} />
      <Route path="/client" element={<DataClient />} />
      <Route path="/energy" element={<Energy />} />
    </Routes>
  </main>;
};

export default Main;
