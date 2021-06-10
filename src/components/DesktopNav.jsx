import React from "react";
import { SidebarData } from "./SidebarData";
import { Link } from "react-router-dom";
import DeskLogo from "../Images/DeskLogo.svg";

const DesktopNav = () => {
  return (
    <>
      <div className="desktop_nav">
        <div className="logoSection desk_logo_section">
          <img src={DeskLogo} alt="desktop logo" />
          <h1>Daietto</h1>
        </div>
        <nav className="deskLinks">
          <ul className="desk_nav_menu">
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.deskcname}>
                  <Link to={item.path}>{item.desk_title1}</Link>
                </li>
              );
            })}
          </ul>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.deskcname}>
                <Link to={item.path}>{item.desk_title2}</Link>
              </li>
            );
          })}
        </nav>
      </div>
    </>
  );
};

export default DesktopNav;
