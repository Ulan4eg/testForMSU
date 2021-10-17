import { useEffect, useState } from "react";
import "./styles.css";
import { getMoviesList } from "./services";
import {
  MovieItemComponent,
  PagerComponent,
  PreviewComponent
} from "./components";

export default function App() {
  const [moviesList, setMoviesList] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    get(currentPage);
  }, [currentPage]);

  const get = async (page = 0) => {
    const response = await getMoviesList(page);
    console.log(response.movies[0]);
    if (response?.movies?.length) {
      setMoviesList(response.movies);
    }
  };

  const switchPage = (newPage) => {
    setCurrentPage(newPage);
  };

  const selectMovie = (movie) => {
    console.log("SELECT", movie.title);
    setSelectedMovie(movie);
  };

  return (
    <div className="App">
      <div className="header">
        <h1>Hello Центр хранения и анализа больших данных</h1>
      </div>
      <div className="body">
        <div className="list">
          <PagerComponent currentPage={currentPage} switchPage={switchPage} />
          {moviesList.map((movie) => (
            <MovieItemComponent
              key={movie.id}
              movie={movie}
              selectMovie={selectMovie}
            />
          ))}
          <PagerComponent currentPage={currentPage} switchPage={switchPage} />
        </div>
        <PreviewComponent movie={selectedMovie} />
      </div>
    </div>
  );
}
