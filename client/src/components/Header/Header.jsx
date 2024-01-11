import React, { useContext } from "react";
import logoImg from "../../assets/logo_several.png";
import UserIcon from "../../assets/user-icon.png";
import AuthContext from "../../context/AuthProvider";

const Header = () => {

  // const [auth] = useContext(AuthContext)

  return (
    <header>
      {/* <img src={logoImg}></img>
      <section className="asesor-info">
        <img src={UserIcon} alt="" />
      </section> */}
    </header>
  )
};

export default Header;
