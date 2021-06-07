import React from "react";
import * as MdIcons from "react-icons/md";
import * as AiIcons from "react-icons/ai";
import * as GiIcons from "react-icons/gi";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import * as FaIcons from "react-icons/fa";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav_text",
  },
  {
    title: "Skills ",
    path: "/skills",
    icon: <GiIcons.GiSkills />,
    cName: "nav_text",
  },

  {
    title: "Team",
    path: "/team",
    icon: <IoIcons.IoMdPeople />,
    cName: "nav_text",
  },
  {
    title: "Services",
    path: "/services",
    icon: <RiIcons.RiServiceLine />,
    cName: "nav_text",
  },
  {
    title: "About",
    path: "/about",
    icon: <FaIcons.FaBookReader />,
    cName: "nav_text",
  },
  {
    title: "Contact",
    path: "/contact",
    icon: <MdIcons.MdContacts />,
    cName: "nav_text",
  },
];

// const SidebarData = () => {
//     return (
//         <div>

//         </div>
//     )
// }

// export default SidebarData
