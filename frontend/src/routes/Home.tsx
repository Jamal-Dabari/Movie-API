import { useEffect, useState } from "react";
import { fetchMovies } from "../api/movies";
import type { Movie } from "../types/movie";
import MovieCard from "../components/MovieCard";

export default function Home() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchMovies()
      .then(setMovies)
      .catch(() => setError("Failed to load movies"))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="flex h-64 items-center justify-center text-zinc-400">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex h-64 items-center justify-center text-red-400">
        {error}
      </div>
    );
  }

  if (movies.length === 0) {
    return (
      <div className="flex h-64 items-center justify-center text-zinc-500">
        No movies found.
      </div>
    );
  }

  return (
    <main className="mx-auto max-w-7xl px-6 py-8">
      <h2 className="mb-6 text-xl font-semibold text-zinc-100">All Films</h2>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {movies.map((movie) => (
          <MovieCard key={movie.imdbId} movie={movie} />
        ))}
      </div>
    </main>
  );
}
