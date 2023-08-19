import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmark,
  faStar,
  faFilm,
  faClapperboard,
  faTheaterMasks,
} from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { FilmContext } from "../context/FilmContext";
import { ThemeContext } from "../context/ThemeContext";

const Single = () => {
  const { selected, handleDeselect } = useContext(FilmContext);
  const { title, director, year, imageUrl, rating,genre, description } = selected;
  const {theme} = useContext(ThemeContext);
  return (
    <div
      className="fixed z-10	 inset-0 flex items-center justify-center bg-[#15151561] p-2"
    >
      <div className={`rounded shadow shadow-gray-500 text-${theme.text} bg-${theme.bg} w-full md:w-3/4 lg:w-1/2 flex flex-col  max-h-full overflow-auto`}>
        <div className={`flex justify-between items-center  p-2`}>
          <h1 className="text-2xl font-semibold ">{title}</h1>
          <FontAwesomeIcon
            icon={faXmark}
            className="hover:bg-gray-300 p-3"
            onClick={handleDeselect}
          />
        </div>
        <div className="flex flex-col md:flex-row p-3 justify-start">
          <img className="md:w-1/2 w-full h-fit" src={imageUrl} alt={title} />
          <div className="flex flex-col px-3">
            <p className="text-lg font-bold">
              Director: {director} <FontAwesomeIcon icon={faClapperboard} />
            </p>
            <p className="text-lg font-light">
              Year: {year} <FontAwesomeIcon icon={faFilm} />
            </p>
            <p className="text-lg font-light">
              Rating: {rating}/10
              <FontAwesomeIcon icon={faStar} className="ml-2 text-yellow-400" />
            </p>
            <p className="text-lg font-light">
              Genre: {genre}
              <FontAwesomeIcon icon={faTheaterMasks} className="ml-2" />
            </p>
            <p className="mt-5">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Single;
