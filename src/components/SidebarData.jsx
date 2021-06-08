import React from "react";
import * as MdIcons from "react-icons/md";
import * as FaIcons from "react-icons/fa";

export const SidebarData = [
  {
    title: "Nosotros ",
    desk_title1: "Nosotros",
    path: "/nosotros",
    icon: <FaIcons.FaDiagnoses />,
    cName: "nav_text",
    deskcname: "desk_nav_text",
  },
  {
    title: "Menu",
    desk_title1: "Menu",
    path: "/menu",
    icon: <MdIcons.MdRestaurantMenu />,
    cName: "nav_text",
    deskcname: "desk_nav_text",
  },
  {
    title: "Contact",
    desk_title1: "Contact",
    path: "/contact",
    icon: <MdIcons.MdContacts />,
    cName: "nav_text",
    deskcname: "desk_nav_text",
  },
  {
    title: "Login",
    desk_title2: "Login",
    path: "/login",
    cName: "log_btn nav_text",
    deskcname: "logBtn desk_nav_text",
  },
  {
    title: "Register",
    desk_title2: "Register",
    path: "/register",
    cName: "sign_btn nav_text",
    deskcname: "regBtn desk_nav_text",
  },
];
