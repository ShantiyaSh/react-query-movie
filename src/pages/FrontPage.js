import { useContext } from "react";
import "../index.css";
import Single from "../component/Single";
import Card from "../component/Card";
import { Layout } from "../component/Layout";
import { FilmContext } from "../context/FilmContext";

const FrontPage = () => {
  const { allFilms , selected , handleSelected } = useContext(FilmContext);
  return (
    <Layout>
      <div className={`min-h-screen flex justify-center`}>
        {selected !== null ? <Single film={selected} /> : ""}
        <div className="flex flex-wrap h-fit w-full max-w-screen-xl">
          {allFilms.map((film, i) => (
            <Card
              key={i}
              id={film.id}
              title={film.title}
              description={film.description}
              imageUrl={film.imageUrl}
              select={handleSelected}
              rating={film.rating}
              year={film.year}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default FrontPage;
