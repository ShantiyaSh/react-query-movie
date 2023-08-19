import { createContext, useEffect, useState } from "react";
import FilmsJson from "../Films/Films";

export const FilmContext = createContext();

export const FilmContextProvider = ({ children }) => {
  const [allFilms, setAllFilms] = useState(FilmsJson);
  const [selected, setSelected] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [orderYear, setOrderYear] = useState(false);
  const [orderRating, setOrderRating] = useState(false);
  const [genres, setGenres] = useState([]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };
  const handleSelected = (id) => {
    const film = FilmsJson.find((film) => film.id === id);
    setSelected(film);
  };
  const handleDeselect = () => {
    setSelected(null);
  };
  const toggleYearOrder = () => {
    setOrderYear((prev) => !prev);
  };
  const toggleRatingOrder = () => {
    setOrderRating((prev) => !prev);
  };
  const handleGenres = (newGenres) => {
    setGenres(newGenres);
  };
  useEffect(() => {
    if (orderYear) {
      setAllFilms((all) => [].concat(all.sort((a, b) => a.year - b.year)));
    } else {
      setAllFilms((all) => [].concat(all.sort((a, b) => b.year - a.year)));
    }
  }, [orderYear]);

  useEffect(() => {
    if (orderRating) {
      setAllFilms((all) => [].concat(all.sort((a, b) => a.rating - b.rating)));
    } else {
      setAllFilms((all) => [].concat(all.sort((a, b) => b.rating - a.rating)));
    }
  }, [orderRating]);

  useEffect(() => {
    let gerneResult = [];
    if (genres.length > 0) {
      genres.forEach((genreSelected) => {
        let filter = FilmsJson.filter((item) => item.genre === genreSelected);
        gerneResult = gerneResult.concat(filter);
      });
    } else {
      gerneResult = FilmsJson;
    }
    const searchResult = FilmsJson.filter((item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    const result = gerneResult.filter((value) => searchResult.includes(value));
    setAllFilms(result);
  }, [genres, searchQuery]);

  return (
    <FilmContext.Provider
      value={{
        allFilms,
        selected,
        searchQuery,
        orderYear,
        orderRating,
        genres,
        handleSearchChange,
        handleSelected,
        handleDeselect,
        toggleYearOrder,
        toggleRatingOrder,
        handleGenres,
      }}
    >
      {children}
    </FilmContext.Provider>
  );
};
