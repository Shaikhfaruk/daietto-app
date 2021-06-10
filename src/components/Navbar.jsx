import React, { useState } from "react";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "./Navbar.css";
import { IconContext } from "react-icons";
import logo from "../Images/logo.svg";
import bar from "../Images/bar.svg";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "#7F8DA0" }}>
        <div className="navbar">
          <div className="logoSection">
            <img src={logo} alt="diietto logo" />
            <h1>Daietto</h1>
          </div>

          <Link to="#" className="menu_bars">
            <img src={bar} alt="diietto bar" onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? "nav_menu active" : "nav_menu"}>
          <ul className="nav_menu_items" onClick={showSidebar}>
            <li className="navbar_toggle">
              <Link to="#" className="menu_bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span className="mbSpan active">{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
