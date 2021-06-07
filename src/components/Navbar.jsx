import React, { useState } from "react";
import * as RiIcons from "react-icons/ri";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "./Navbar.css";
import { IconContext } from "react-icons";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "#7F8DA0" }}>
        <div className="navbar">
          <Link to="#" className="menu_bars">
            <RiIcons.RiBarChartHorizontalLine onClick={showSidebar} />
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
                    <span>{item.title}</span>
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
