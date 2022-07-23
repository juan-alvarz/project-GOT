import React from "react";
import { Link } from "react-router-dom";
import "./About.css";
import img from "../../img-cp2/shinji.jpg";

const About = () => {
  return (
    <div className="main-container-about">
      <div className="container-about-1">
        <div className="header-about1">
          <h3>Hi, i'm Juan E. Alvarez</h3>
          <img src={img} alt="shinji" id="img-profile" />
        </div>
        <p className="text-content">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis
          dicta impedit esse fuga perspiciatis accusamus obcaecati velit
          quisquam excepturi ducimus recusandae sapiente, consequatur culpa est
          voluptatum quae earum sequi saepe. Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Dicta commodi inventore, porro quidem at
          aspernatur facilis tempore animi eaque numquam, nisi, quaerat
          recusandae sed? Molestias suscipit dicta non nisi iusto?
        </p>
        <footer className="footer">
          <ul>
            <li>
              <a href="https://facebook.com" target="_BLANK">
                Facebook
              </a>
            </li>
            <li>
              <a href="https://linkedin.com" target="_BLANK">
                Linkedin
              </a>
            </li>
            <li>
              <a href="https://twitter.com" target="_BLANK">
                Twitter
              </a>
            </li>
          </ul>
        </footer>
      </div>
      <div className="container-about-2">
        <div className="project-container">Rick {"&"} Morty </div>
        <div className="project-container">The Simpsons</div>
        <div className="project-container">HenryFlix</div>
      </div>
    </div>
  );
};

export default About;
