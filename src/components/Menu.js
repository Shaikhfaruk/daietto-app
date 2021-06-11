import React, { useEffect } from "react";
import dish1 from "../Images/dish1.png";
import dish2 from "../Images/dish2.png";
import "./Menu.css";
import Aos from "aos";
import "aos/dist/aos.css";
import dash_line from "../Images/dash_line.svg";
import * as AiIcons from "react-icons/ai";
import { IconContext } from "react-icons";

const Menu = () => {
  useEffect(() => {
    Aos.init({ duration: 5000 });
  }, []);
  return (
    <>
      <IconContext.Provider
        value={{ backgroundColor: "#fff", fontSize: "15px" }}
      >
        <div className="menu_container" data-aos="fade-up">
          <div className="dish_container">
            <div className="dish_card1" data-aos="zoom-in">
              <img
                className="dish_images1"
                data-aos="fade-left"
                src={dish1}
                alt="First Dish"
              />
              <h3 className="dish_name1">Ensalada mixta</h3>
              <button className="next_btn1" data-aos="fade-right">
                <AiIcons.AiOutlineArrowRight />
              </button>
            </div>

            <div className="dish_card2" data-aos="zoom-in">
              <img
                className="dish_images2"
                data-aos="fade-left"
                src={dish2}
                alt="Second Dish"
              />
              <h3 className="dish_name2">Ensalada con pollo</h3>
              <button className="next_btn2" data-aos="fade-right">
                <AiIcons.AiOutlineArrowRight />
              </button>
            </div>
          </div>

          <div className="about_menu">
            <img className="dash_line1" src={dash_line} alt="line" />
            <h1 className="menu_heading">
              Descubre <span> que tan fácil crear alimentos saludables</span>
            </h1>
            <p className="menu_para">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              egestas accumsan odio, cursus laoreet mauris porttitor non.
              Aliquam eu neque nibh. Aenean non pellentesque justo.
            </p>
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
};

export default Menu;
