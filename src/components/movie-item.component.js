import "./movie-item.component.css";
import { useMemo } from "react";

export function MovieItemComponent(props) {
  const movie = props.movie;
  const runtimeFormatted = useMemo(() => {
    const runtime = movie.runtime;
    let hour = Math.floor(runtime / 60);
    let min = runtime - hour * 60;

    return `${!!hour ? hour + " час " : ""}${!!min ? min + " минут" : ""}`;
  }, []);

  const selectMovie = () => {
    props.selectMovie(movie);
  };

  return (
    <div className="row movie-item" onClick={selectMovie}>
      <div>
        <div className="movie-title">
          {movie?.title} ({movie.year})
        </div>
        <div className="movie-description">{movie?.summary}</div>
        <div className="movie-footer">
          <div>Продолжительность: {runtimeFormatted}</div>
          <div>Рейтинг: {movie?.rating}</div>
        </div>
      </div>
      <img src={movie?.medium_cover_image} alt={"ooops"} />
    </div>
  );
}
