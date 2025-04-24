import React, { useState } from "react";
import "./Header.css";
import Logo from "../../assets/logo.png";
import Bars from "../../assets/bars.png";
import { Link } from "react-scroll";

const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="header">
      <img src={Logo} alt="logo" />
      {menuOpen === false && mobile === true ? (
        <div id='bars'
        onClick={()=>setMenuOpen(true)}
        >
          <img  src={Bars} alt="" />
        </div>
      ) : (
        <ul>
          <li ><Link onClick={()=>setMenuOpen(false)} to="hero" span={true} smooth={true} activeClass="active">Home</Link> </li>
          <li ><Link onClick={()=>setMenuOpen(false)} to="programs" span={true} smooth={true}>Programs</Link></li>
          <li ><Link onClick={()=>setMenuOpen(false)} to="Reasons" span={true} smooth={true}>Why us</Link></li>
          <li ><Link onClick={()=>setMenuOpen(false)} to="Plans" span={true} smooth={true}>Plans</Link></li>
          <li ><Link onClick={()=>setMenuOpen(false)} to="testimonials" span={true} smooth={true}>Testimonials</Link></li>
        </ul>
      )}
    </div>
  );
};

export default Header;
