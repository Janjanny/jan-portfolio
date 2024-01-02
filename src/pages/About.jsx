import { useSelector } from "react-redux";
import css from "../assets/css-logo.png";
import html from "../assets/html-logo.png";
import js from "../assets/js-logo.png";
import mui from "../assets/mui-logo.png";
import mysql from "../assets/mysql-logo.png";
import node from "../assets/node-logo.png";
import react from "../assets/react-logo.png";
import tailwind from "../assets/tailwind-logo.png";

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

  return (
    <>
      <div
        className={` ${
          theme.darkMode ? "bg-off-white text-black" : "bg-black text-off-white"
        } min-h-screen w-full relative  `}
        id="about"
      >
        <div className="content-container w-10/12 mx-auto text-center pt-36">
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
          <div className="grid grid-cols-2 mt-20 gap-5">
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
              <h1 className=" font-bold text-3xl my-5">Web Development</h1>
              <p className=" text-sm text-center">
                I focus on making easy-to-use websites using APIs. I use Node.js
                and React.js to build strong and dynamic platforms. With these
                tools, I create websites that are interactive and work well with
                different external services.
              </p>
              <div className="icons-container flex flex-wrap justify-center gap-9 mt-8">
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
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
