import { useSelector } from "react-redux";
import css from "../assets/css-logo.png";
import html from "../assets/html-logo.png";
import js from "../assets/js-logo.png";
import mui from "../assets/mui-logo.png";
import mysql from "../assets/mysql-logo.png";
import node from "../assets/node-logo.png";
import react from "../assets/react-logo.png";
import tailwind from "../assets/tailwind-logo.png";
import figma from "../assets/figma-logo.png";
import adobeXd from "../assets/adobe-xd-logo.png";
import photoshop from "../assets/photoshop-logo.png";
import canva from "../assets/canva-logo.png";
import infiniteDesigner from "../assets/infinite-logo.png";
import photopea from "../assets/photopea-logo.png";

const About = () => {
  const theme = useSelector((state) => state.theme);
  const iconsWebDev = [
    { name: "HTML", path: html },
    { name: "CSS", path: css },
    { name: "Javascript", path: js },
    { name: "React", path: react },
    { name: "Node.js", path: node },
    { name: "Tailwind CSS", path: tailwind },
    { name: "Material UI", path: mui },
  ];

  const iconsGraphics = [
    { name: "Figma", path: figma },
    { name: "Adobe XD", path: adobeXd },
    { name: "Photoshop", path: photoshop },
    { name: "Canva", path: canva },
    { name: "Infinite Design", path: infiniteDesigner },
    { name: "Photopea", path: photopea },
  ];

  return (
    <>
      <div
        className={` ${
          theme.darkMode ? "bg-off-white text-black" : "bg-black text-off-white"
        } min-h-screen w-full relative  transition-all `}
        id="about"
      >
        <div className="content-container w-11/12 md:w-10/12 mx-auto text-center pt-36">
          <h1 className=" font-body font-bold text-5xl">ABOUT ME</h1>
          <p className="font-body mt-20 text-base lg:text-lg text-center">
            Hello, I'm <strong>Chris Jan Beboso</strong>, a Computer Engineering
            graduate from PUP Biñan Campus. I have a strong passion for web
            development and graphic design. I enjoy creating and designing
            things, particularly drawn to brutalist and minimalist styles. Below
            are the skills that I have in both web development and graphics
            design.
          </p>
        </div>
        <div className="grid-container absolute  w-10/12 mx-auto left-0 right-0 pb-20 ">
          <div className="grid grid-cols-1 lg:grid-cols-2 mt-20 gap-8">
            <div
              className={`skill-card ${
                theme.darkMode
                  ? "bg-dark-card text-off-white"
                  : "bg-white text-black"
              } flex flex-col justify-center items-center font-body px-6 pt-6 pb-16 md:px-10 md:pt-10 md:pb-20 rounded-xl shadow-xl`}
            >
              <box-icon
                name="code-block"
                size="100px"
                color="currentColor"
              ></box-icon>
              <h1 className=" font-bold text-3xl my-5 text-center">
                Web Development
              </h1>
              <p className=" text-sm text-center">
                I focus on making easy-to-use websites using APIs. I use Node.js
                and React.js to build strong and dynamic platforms. With these
                tools, I create websites that are interactive and work well with
                different external services.
              </p>
              <div className="icons-container flex flex-wrap justify-center gap-8 md:gap-9 mt-10 w-11/12">
                {iconsWebDev.map((icon, index) => (
                  <img
                    src={icon.path}
                    alt=""
                    key={index}
                    className=" w-auto h-8 md:h-10 cursor-pointer"
                  />
                ))}
              </div>
            </div>

            <div
              className={`skill-card ${
                theme.darkMode
                  ? "bg-dark-card text-off-white"
                  : "bg-white text-black"
              } flex flex-col justify-center items-center font-body px-6 pt-6 pb-16 md:px-10 md:pt-10 md:pb-20 rounded-xl shadow-xl`}
            >
              <box-icon
                name="palette"
                color="currentColor"
                size="100px"
              ></box-icon>
              <h1 className=" font-bold text-3xl my-5 text-center">
                Graphics Design
              </h1>
              <p className=" text-sm text-center">
                I specialize in making shirt designs and layouts. I’ve done more
                than a hundred commissions from different clothing brands. I
                also make captivating posters and engaging web designs. My
                design aesthetic is all about minimalism and brutalism.
              </p>
              <div className="icons-container flex flex-wrap justify-center gap-8 md:gap-9 mt-10 w-11/12">
                {iconsGraphics.map((icon, index) => (
                  <img
                    src={icon.path}
                    alt=""
                    key={index}
                    className=" w-auto h-8 md:h-10 cursor-pointer"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
