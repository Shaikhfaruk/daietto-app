import React from "react";
import dash_line from "./dash_line.svg";
import * as AiIcons from "react-icons/ai";
import * as FcIcons from "react-icons/fc";
import login_img from "./login_img.svg";
import circle from "./circle.svg";
import img3 from "./img3.svg";
import home_img from "./home_img.svg";
import home_pop_img from "./home_pop_img.svg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="home_left_container">
          <div>
            <img className="dash_line" src={dash_line} alt="line" />
          </div>

          <p className="first_para">La app de dieta, perfecta para ti</p>
          <h1 className="home_heading">
            Deliciosas <span> recetas de comida saludavle</span>{" "}
          </h1>
          <p className="second_para">
            Encuentra las mejores recetas para llevar tu dieta a otro
            <br />
            nivel, sin necesidad de afectar su salud
          </p>
          <div className="home_mb_images">
            <img className="img1" src={circle} alt="circle" />
            <img className="img2" src={login_img} alt="login_img" />
            <img src={img3} alt="" className="img3" />
            <img src={home_img} alt="" className="home_img" />
            <img src={home_pop_img} alt="" className="home_pop_img" />
          </div>

          <div className="social_names_up">
            <ul>
              <li>
                <Link to="#">Facebook</Link>
              </li>
              <li>/</li>
              <li>
                <Link to="#">Instagram</Link>
              </li>
              <li>/</li>
              <li>
                <Link to="#">Twitter</Link>
              </li>
            </ul>
          </div>
          <div className="btn_section">
            <button>Descargar app</button>
            <div className="social_btns">
              <AiIcons.AiFillApple className="social_btn" />
              <FcIcons.FcAndroidOs className="social_btn" />
            </div>
          </div>
          <div className="social_names">
            <ul>
              <li>
                <Link>Facebook</Link>
              </li>
              <li>/</li>
              <li>
                <Link>Instagram</Link>
              </li>
              <li>/</li>
              <li>
                <Link>Twitter</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="home_right_container">
          <div className="images">
            <img className="img1" src={circle} alt="circle" />
            <img className="img2" src={login_img} alt="login_img" />
            <img src={img3} alt="" className="img3" />
            <img src={home_img} alt="" className="home_img" />
            <img src={home_pop_img} alt="" className="home_pop_img" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
