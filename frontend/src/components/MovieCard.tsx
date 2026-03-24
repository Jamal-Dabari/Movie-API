import { Link } from "react-router-dom";
import type { Movie } from "../types/movie";

interface Props {
  movie: Movie;
}

export default function MovieCard({ movie }: Props) {
  return (
    <Link to={`/movies/${movie.imdbId}`} className="group block">
      <div className="aspect-[2/3] overflow-hidden rounded-md bg-zinc-800">
        {movie.poster ? (
          <img
            src={movie.poster}
            alt={movie.title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-sm text-zinc-500">
            No poster
          </div>
        )}
      </div>
      <div className="mt-2">
        <p className="truncate text-sm font-medium text-zinc-100">{movie.title}</p>
        <p className="text-xs text-zinc-400">{movie.releaseDate?.slice(0, 4)}</p>
      </div>
    </Link>
  );
}
