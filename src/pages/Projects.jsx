import Card from "../components/Card";
import { useSelector } from "react-redux";
import { projects } from "../projects";

const Projects = () => {
  const theme = useSelector((state) => state.theme);

  return (
    <div
      className={`min-h-screen w-full ${
        theme.darkMode ? "bg-black" : "bg-off-white"
      } pb-40 transition-all`}
    >
      <div className="container w-10/12 mx-auto ">
        <div className="divider h-screen "></div>
        <div className="divider h-screen md:h-80 lg:h-0 "></div>

        <div
          className={`title-div flex justify-between text-center flex-col md:flex-row  ${
            theme.darkMode ? "text-white" : "text-black"
          }  transition-all`}
          id="projects"
        >
          <h1 className={`font-body font-extrabold uppercase text-6xl `}>
            Projects
          </h1>
          <p className="font-body w-full md:w-5/12 text-sm md:text-base text-center md:text-left mt-5 md:mt-0">
            Discover a diverse collection of my projects. Dive in to experience
            the variety of creations I've developed.
          </p>
        </div>

        <div className="card-container mt-20 grid grid-cols-1 lg:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <Card
              key={index}
              name={project.name}
              image={project.image}
              websiteLink={project.websiteLink}
              description={project.description}
              githubLink={project.githubLink}
              type={project.type}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Projects;
