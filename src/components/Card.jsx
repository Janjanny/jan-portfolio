import { useSelector } from "react-redux";
import "boxicons";

const Card = ({ image, name, websiteLink, description, githubLink, type }) => {
  return (
    <div className="container bg-white text-black shadow-lg w-full h-full px-8 py-10 rounded-xl transition-all">
      <div className="pic-container w-full h-60 overflow-hidden rounded-xl">
        <img src={image} alt="" className=" object-cover w-full h-full" />
      </div>
      <div className="text-container w-11/12 mt-7">
        <a href={websiteLink} target="_blank">
          <h1 className=" font-body font-bold text-lg hover:underline">
            {name}
          </h1>
        </a>

        <p className=" font-body text-sm mt-4">{description}</p>
      </div>

      <button className="font-body font-bold text-sm border flex py-1 px-3 mt-10 ml-auto gap-2 rounded-md items-center text-black bg-white hover:text-off-white hover:bg-black transition-all">
        {type == "website" ? (
          <>
            <a href={githubLink}>View on Github</a>
            <box-icon name="github" type="logo" color="currentColor"></box-icon>
          </>
        ) : (
          <>
            <a href={githubLink}>View on Facebook</a>
            <box-icon
              name="facebook-circle"
              type="logo"
              color="currentColor"
            ></box-icon>
          </>
        )}
      </button>
    </div>
  );
};
export default Card;
