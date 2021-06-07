import React from "react";
import * as MdIcons from "react-icons/md";
import * as FaIcons from "react-icons/fa";

export const SidebarData = [
  {
    title: "Nosotros ",
    path: "/nosotros",
    icon: <FaIcons.FaDiagnoses />,
    cName: "nav_text",
  },
  {
    title: "Menu",
    path: "/menu",
    icon: <MdIcons.MdRestaurantMenu />,
    cName: "nav_text",
  },
  {
    title: "Contact",
    path: "/contact",
    icon: <MdIcons.MdContacts />,
    cName: "nav_text",
  },
  {
    title: "Login",
    path: "/login",
    cName: "log_btn nav_text",
  },
  {
    title: "Register",
    path: "/register",
    cName: "sign_btn nav_text",
  },
];

// const SidebarData = () => {
//     return (
//         <div>

//         </div>
//     )
// }

// export default SidebarData
