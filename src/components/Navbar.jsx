import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { switchMode } from "../redux/theme";
import "boxicons";

const Navbar = () => {
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);

  const showNav = () => {
    setVisible(!visible);
  };

  const handleToggle = () => {
    dispatch(switchMode());
  };

  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`w-full fixed ${
        theme.darkMode ? " bg-black" : "bg-off-white"
      } top-0 z-10 transition-all`}
    >
      <div
        className={`w-10/12 mx-auto py-7 flex justify-between items-center ${
          theme.darkMode ? "text-off-white" : " text-black"
        }`}
      >
        {visible ? (
          <label className="switch ">
            <input
              type="checkbox"
              onChange={handleToggle}
              checked={theme.darkMode}
            />
            <span className="slider flex items-center justify-between px-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="white"
                class="w-5 h-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-5 h-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                />
              </svg>
            </span>
          </label>
        ) : (
          <Link to="/">
            <h1 className="nav-logo font-body font-black text-2xl ">jan.dev</h1>
          </Link>
        )}

        <ul
          className={`md:flex  gap-10 font-body text-sm items-center transition-all hidden`}
        >
          <li className="hover:font-bold transition-all">
            <a href="#home">Home</a>
          </li>
          <li className="hover:font-bold transition-all">
            <a href="#about">About</a>
          </li>
          <li className="hover:font-bold transition-all">
            <a href="#projects">Projects</a>
          </li>
          <li className="hover:font-bold transition-all">
            <a href="#contact">Contact</a>
          </li>
        </ul>

        <label className="switch hidden md:block">
          <input
            type="checkbox"
            onChange={handleToggle}
            checked={theme.darkMode}
          />
          <span className="slider flex items-center justify-between px-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="white"
              class="w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
              />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
              />
            </svg>
          </span>
        </label>

        <button
          className={` ${
            theme.darkMode ? "text-off-white" : "text-black"
          }  block md:hidden `}
          onClick={showNav}
        >
          {visible ? (
            <box-icon name="x" color="currentColor" size="md"></box-icon>
          ) : (
            <box-icon
              name="menu-alt-right"
              color="currentColor"
              size="md"
            ></box-icon>
          )}
        </button>
      </div>

      <div
        className={`${
          visible ? "block" : "hidden"
        } absolute w-screen h-screen ${
          theme.darkMode
            ? "bg-black text-off-white"
            : "bg-off-white text-black "
        }  transition-all `}
      >
        <ul
          className={`flex  gap-12 font-body text-lg mt-16 items-center transition-all flex-col`}
        >
          <li className="hover:font-bold transition-all">
            <a href="#home" onClick={showNav}>
              Home
            </a>
          </li>
          <li className="hover:font-bold transition-all">
            <a href="#about" onClick={showNav}>
              About
            </a>
          </li>
          <li className="hover:font-bold transition-all">
            <a href="#projects" onClick={showNav}>
              Projects
            </a>
          </li>
          <li className="hover:font-bold transition-all">
            <a href="#contact" onClick={showNav}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
