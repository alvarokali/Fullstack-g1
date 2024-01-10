import React from "react";
import logoImg from "../../assets/logo_several.png";
import "./Header.css"

const Header = () => {
  return <div className="container-logo">
    <img className="logo" src={logoImg}></img>
    <p className="name-header">¡Hola Usuario! 👤 </p>
  </div> 
};

export default Header;
