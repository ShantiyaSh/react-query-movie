import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import {
  Button,
  Input,
  Typography,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Checkbox,
} from "@material-tailwind/react";
import { ThemeContext } from "../context/ThemeContext";
import { FilmContext } from "../context/FilmContext";

const Navbar = () => {
  const [genres, setGenres] = useState([]);
  const { theme } = useContext(ThemeContext);
  const {
    toggleYearOrder,
    toggleRatingOrder,
    handleSearchChange,
    handleGenres,
  } = useContext(FilmContext);

  const toggleGerens = (newGenre) => {
    let index = genres.indexOf(newGenre);
    if (index > -1) {
      setGenres((currentGenres) => currentGenres.filter((g) => g !== newGenre));
    } else {
      setGenres((currentGenres) => currentGenres.concat(newGenre));
    }
  };
  const genreIsSelect = (gerneSelected) => {
    let index = genres.indexOf(gerneSelected);
    if (index > -1) {
      return true;
    } else {
      return false;
    }
  };
  useEffect(() => {
    handleGenres(genres);
  });

  return (
    <div
      className={`flex justify-center p-4 shadow shadow-gray-500`}
    >
      <div className="flex justify-between items-center w-full flex-col lg:flex-row   max-w-screen-xl">
        <div className="flex flex-row item-center ">
          <Link className="flex flex-rows ">
            <Typography className="text-2xl ">Film Bazan</Typography>
          </Link>
          <ul className="flex flex-row">
            <Link to="/" className="p-1 ml-8 font-light hover:font-bold ">Home</Link>
            <Link to="/contact-us"className="p-1 ml-8 font-light hover:font-bold">Contact Us</Link>
          </ul>
        </div>
        
        <div className="flex flex-col items-center md:flex-row">
          <Menu>
            <MenuHandler>
              <Button className="m-2 w-full md:w-auto " color={theme.btn}>
                Genre
              </Button>
            </MenuHandler>
            <MenuList className={`bg-${theme.bg} text-${theme.text}`}>
              <MenuItem>
                <Checkbox
                  checked={genreIsSelect("Drama")}
                  onChange={() => toggleGerens("Drama")}
                  label="Drama"
                />
              </MenuItem>
              <MenuItem>
                <Checkbox
                  checked={genreIsSelect("Action")}
                  onChange={() => toggleGerens("Action")}
                  label="Action"
                />
              </MenuItem>
              <MenuItem>
                <Checkbox
                  checked={genreIsSelect("Crime")}
                  onChange={() => toggleGerens("Crime")}
                  label="Crime"
                />
              </MenuItem>
              <MenuItem>
                <Checkbox
                  checked={genreIsSelect("Fantasy")}
                  onChange={() => toggleGerens("Fantasy")}
                  label="Fantasy"
                />
              </MenuItem>
            </MenuList>
          </Menu>
          <Button className="m-2 w-full md:w-auto "  color={theme.btn} onClick={toggleYearOrder}>
            Release year
          </Button>
          <Button className="m-2 w-full md:w-auto " color={theme.btn} onClick={toggleRatingOrder}>
            Rating
          </Button>

          <div className="flex flex-row align-center relative">
            <Input
              color={theme.text}
              variant="outlined"
              label="Search..."
              onChange={handleSearchChange}
              size="lg"
              icon={<FontAwesomeIcon icon={faSearch} />}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
