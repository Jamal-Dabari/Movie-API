import type { Movie } from "../types/movie";

const BASE_URL = "http://localhost:8080/api/v1";

export async function fetchMovies(): Promise<Movie[]> {
  const res = await fetch(`${BASE_URL}/movies`);
  if (!res.ok) throw new Error("Failed to fetch movies");
  return res.json();
}

export async function fetchMovieByImdbId(imdbId: string): Promise<Movie> {
  const res = await fetch(`${BASE_URL}/movies/${imdbId}`);
  if (!res.ok) throw new Error("Failed to fetch movie");
  return res.json();
}
