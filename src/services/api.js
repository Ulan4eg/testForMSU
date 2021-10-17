import { listMovies } from "../constans";

export async function getMoviesList(page = 0, limit = 5) {
  return fetch(`${listMovies}?limit=${limit}&page=${page}`)
    .then((result) => result.json())
    .then((result) => result.data);
}
