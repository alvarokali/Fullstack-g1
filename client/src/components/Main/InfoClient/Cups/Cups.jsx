import React from "react";
import { Link } from "react-router-dom";
import FormCups from "./FormCups";

const Cups = () => {
  return (
    <>
      <section className="section-cups">
        <FormCups />
        <Link to="/client">No tengo el CUPS</Link>
      </section>
    </>
  );
};

export default Cups;
