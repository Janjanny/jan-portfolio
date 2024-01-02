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
        } min-h-screen w-full relative  `}
        id="about"
      >
        <div className="content-container w-11/12 md:w-10/12 mx-auto text-center pt-36">
          <h1 className=" font-body font-bold text-5xl">ABOUT ME</h1>
          <p className="font-body mt-20 text-base text-center">
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
            <div className="skill-card bg-white text-black flex flex-col justify-center items-center font-body px-10 pt-10 pb-20 rounded-xl shadow-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="110"
                height="110"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zM4 19V7h16l.002 12H4z"></path>
                <path d="M9.293 9.293 5.586 13l3.707 3.707 1.414-1.414L8.414 13l2.293-2.293zm5.414 0-1.414 1.414L15.586 13l-2.293 2.293 1.414 1.414L18.414 13z"></path>
              </svg>
              <h1 className=" font-bold text-3xl my-5 text-center">
                Web Development
              </h1>
              <p className=" text-sm text-center">
                I focus on making easy-to-use websites using APIs. I use Node.js
                and React.js to build strong and dynamic platforms. With these
                tools, I create websites that are interactive and work well with
                different external services.
              </p>
              <div className="icons-container flex flex-wrap justify-center gap-9 mt-10 w-11/12">
                {iconsWebDev.map((icon, index) => (
                  <img
                    src={icon.path}
                    alt=""
                    key={index}
                    className=" w-auto h-10 cursor-pointer"
                  />
                ))}
              </div>
            </div>

            <div className="skill-card bg-white text-black flex flex-col justify-center items-center font-body px-10 pt-10 pb-20 rounded-xl shadow-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="110"
                height="110"
                viewBox="0 0 24 24"
              >
                <path d="M13.4 2.096a10.08 10.08 0 0 0-8.937 3.331A10.054 10.054 0 0 0 2.096 13.4c.53 3.894 3.458 7.207 7.285 8.246a9.982 9.982 0 0 0 2.618.354l.142-.001a3.001 3.001 0 0 0 2.516-1.426 2.989 2.989 0 0 0 .153-2.879l-.199-.416a1.919 1.919 0 0 1 .094-1.912 2.004 2.004 0 0 1 2.576-.755l.412.197c.412.198.85.299 1.301.299A3.022 3.022 0 0 0 22 12.14a9.935 9.935 0 0 0-.353-2.76c-1.04-3.826-4.353-6.754-8.247-7.284zm5.158 10.909-.412-.197c-1.828-.878-4.07-.198-5.135 1.494-.738 1.176-.813 2.576-.204 3.842l.199.416a.983.983 0 0 1-.051.961.992.992 0 0 1-.844.479h-.112a8.061 8.061 0 0 1-2.095-.283c-3.063-.831-5.403-3.479-5.826-6.586-.321-2.355.352-4.623 1.893-6.389a8.002 8.002 0 0 1 7.16-2.664c3.107.423 5.755 2.764 6.586 5.826.198.73.293 1.474.282 2.207-.012.807-.845 1.183-1.441.894z"></path>
                <circle cx="7.5" cy="14.5" r="1.5"></circle>
                <circle cx="7.5" cy="10.5" r="1.5"></circle>
                <circle cx="10.5" cy="7.5" r="1.5"></circle>
                <circle cx="14.5" cy="7.5" r="1.5"></circle>
              </svg>
              <h1 className=" font-bold text-3xl my-5 text-center">
                Graphics Design
              </h1>
              <p className=" text-sm text-center">
                I specialize in making shirt designs and layouts. I’ve done more
                than a hundred commissions from different clothing brands. I
                also make captivating posters and engaging web designs. My
                design aesthetic is all about minimalism and brutalism.
              </p>
              <div className="icons-container flex flex-wrap justify-center gap-9 mt-10 w-11/12">
                {iconsGraphics.map((icon, index) => (
                  <img
                    src={icon.path}
                    alt=""
                    key={index}
                    className=" w-auto h-10 cursor-pointer"
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
