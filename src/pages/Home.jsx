import Profile from "../assets/profile.png";
import { useSelector } from "react-redux";
import "boxicons";

const Home = () => {
  const theme = useSelector((state) => state.theme);

  return (
    <div
      className={` ${
        theme.darkMode ? "bg-black" : "bg-off-white"
      } max-w-full min-h-screen container  flex justify-center items-center transition-all`}
      id="home"
    >
      <div className=" w-11/12 md:w-10/12 mx-auto grid md:grid-cols-2 gap-14 md:gap-5 grid-cols-1 my-36 md:my-0 ">
        <div className="picture-container  flex md:justify-end justify-center ">
          <div className="picture flex lg:w-72 lg:h-72 md:w-64 md:h-64 sm:w-60 sm:h-60 w-52 h-52 rounded-full overflow-hidden shadow-xl ">
            <img
              src={Profile}
              alt="profile"
              className=" w-full h-full object-cover"
            />
          </div>
        </div>
        <div
          className={`text-container  ${
            theme.darkMode ? "text-off-white" : "text-black"
          } flex flex-col justify-center md:items-start items-center `}
        >
          <p className=" font-medium font-body text-base lg:text-base ">
            Hi, I'm Chris Jan
          </p>
          <h1 className="font-bold font-body lg:text-6xl md:text-5xl text-5xl text-center md:text-left lg:w-2/4 w-full mt-5 md:mt-0">
            a web developer
          </h1>
          <div className="socials flex flex-col md:flex-row gap-8 mt-5">
            <button
              className={`font-body font-medium ${
                theme.darkMode
                  ? " border-off-white bg-black hover:bg-off-white hover:text-black"
                  : "border-black bg-off-white hover:bg-black hover:text-off-white"
              } border-2 flex gap-2  py-1 px-5 rounded-full   transition-all items-center md:mt-0 mt-8`}
            >
              <a
                href="../assets/resume.pdf"
                download="Chris_Jan_CV.pdf"
                className=" text-sm "
              >
                Download CV
              </a>
            </button>

            <div
              className={`social-links flex ${
                theme.darkMode ? "text-off-white" : "text-black"
              } items-center justify-center gap-3`}
            >
              <a
                href="https://github.com/Janjanny"
                target="_blank"
                className=" hover:-translate-y-2 transition-all "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
                  ></path>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/chris-jan-beboso-3325b115a/"
                className=" hover:-translate-y-2 transition-all "
                target="blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM8.339 18.337H5.667v-8.59h2.672v8.59zM7.003 8.574a1.548 1.548 0 1 1 0-3.096 1.548 1.548 0 0 1 0 3.096zm11.335 9.763h-2.669V14.16c0-.996-.018-2.277-1.388-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248h-2.667v-8.59h2.56v1.174h.037c.355-.675 1.227-1.387 2.524-1.387 2.704 0 3.203 1.778 3.203 4.092v4.71z"></path>
                </svg>
              </a>

              <a
                href="https://www.facebook.com/chrisjanbeboso"
                target="blank"
                className=" hover:-translate-y-2 transition-all "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h8.615v-6.96h-2.338v-2.725h2.338v-2c0-2.325 1.42-3.592 3.5-3.592.699-.002 1.399.034 2.095.107v2.42h-1.435c-1.128 0-1.348.538-1.348 1.325v1.735h2.697l-.35 2.725h-2.348V21H20a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
