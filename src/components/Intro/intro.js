import React from "react";
import "./intro.css";
import { Link } from "react-scroll";
import profileMain from "../../assets/business-man.png";
import btnImg from "../../assets/briefcase.svg";

const Intro = () => {
  return (
    <section id="intro">
      <div class="introContent">
        <span class="hello">Hello,</span>
        <span class="introText">
          I'm <span class="introName">Harley</span>
          <br />
          Full Stack Developer
        </span>
        <p class="introPara">
          I am an aspiring Full Stack Developer dedicated to bringing
          professionalism and innovation to the digital world through efficient
          and user-focused solutions.{" "}
        </p>
        <Link>
          <button class="btn">
            <img src={btnImg} alt="Hire Me" className="btnImg"/>
            Hire Me
          </button>
        </Link>
      </div>
      <img src={profileMain} alt="" class="bg" />
    </section>
  );
};

export default Intro;
