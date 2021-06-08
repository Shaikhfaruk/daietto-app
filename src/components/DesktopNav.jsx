import React from "react";
import DeskLogo from "./DeskLogo.svg";

const DesktopNav = () => {
  return (
    <>
      <div className="desktop_nav">
        <div className="logoSection desk_logo_section">
          <img src={DeskLogo} alt="desktop logo" />
          <h1>Daietto</h1>
        </div>
      </div>
    </>
  );
};

export default DesktopNav;
