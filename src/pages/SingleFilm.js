import { Link, useParams } from "react-router-dom";
import { Layout } from "../component/Layout";
import { FilmContext } from "../context/FilmContext";
import { useContext } from "react";
import { Typography , Button } from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm, faStar, faTheaterMasks } from "@fortawesome/free-solid-svg-icons";
import { ThemeContext } from "../context/ThemeContext";

const SingleFilm = () => {
  const routeParams = useParams();
  const { findBySlug } = useContext(FilmContext);
  const { theme } = useContext(ThemeContext);

  const { title, director, year, imageUrl, rating, genre, description } =
    findBySlug(routeParams.filmSlug);

  return (
    <Layout>
      <div className={`min-h-screen flex justify-center`}>
        <div className="flex flex-col items-center h-fit w-full max-w-screen-xl p-10 ">
          <img
            src={imageUrl}
            alt={title}
            className="w-full md:w-3/4 lg:w-2/3"
          ></img>
          <div className="w-full md:w-3/4 lg:w-2/3">
            <Typography variant="h1">{title}</Typography>
            <Typography variant="h3">Director:{director} </Typography>

            <Typography variant="h3">
              Year: {year} <FontAwesomeIcon icon={faFilm} />
            </Typography>
            <Typography variant="h3">
              Rating: {rating}/10
              <FontAwesomeIcon icon={faStar} className="ml-2 text-yellow-400" />
            </Typography>
            <Typography variant="h3">
              Genre: {genre}
              <FontAwesomeIcon icon={faTheaterMasks} className="ml-2" />
            </Typography>
            <Typography>
                {description}
            </Typography>
            <Link className="mt-auto " to="/">
              <Button fullWidth color={theme.btn}>Home </Button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default SingleFilm;
