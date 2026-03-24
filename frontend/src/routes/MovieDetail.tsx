import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { fetchMovieByImdbId } from "../api/movies";
import type { Movie } from "../types/movie";

export default function MovieDetail() {
  const { imdbId } = useParams<{ imdbId: string }>();
  const [movie, setMovie] = useState<Movie | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!imdbId) return;
    fetchMovieByImdbId(imdbId)
      .then(setMovie)
      .catch(() => setError("Movie not found"))
      .finally(() => setLoading(false));
  }, [imdbId]);

  if (loading) {
    return (
      <div className="flex h-64 items-center justify-center text-zinc-400">
        Loading...
      </div>
    );
  }

  if (error || !movie) {
    return (
      <div className="flex h-64 items-center justify-center text-red-400">
        {error ?? "Not found"}
      </div>
    );
  }

  return (
    <main>
      {movie.backdrops?.[0] && (
        <div className="relative h-72 w-full overflow-hidden">
          <img
            src={movie.backdrops[0]}
            alt=""
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent" />
        </div>
      )}

      <div className="mx-auto max-w-5xl px-6 py-8">
        <Link
          to="/"
          className="mb-6 inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-zinc-100"
        >
          <ArrowLeft size={16} /> Back to films
        </Link>

        <div className="flex gap-8">
          <div className="w-40 shrink-0">
            {movie.poster ? (
              <img
                src={movie.poster}
                alt={movie.title}
                className="w-full rounded-md object-cover shadow-lg"
              />
            ) : (
              <div className="aspect-[2/3] rounded-md bg-zinc-800" />
            )}
          </div>

          <div className="flex-1">
            <h1 className="text-3xl font-bold text-zinc-100">{movie.title}</h1>
            <p className="mt-1 text-zinc-400">{movie.releaseDate}</p>

            {movie.genres?.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-2">
                {movie.genres.map((genre) => (
                  <span
                    key={genre}
                    className="rounded-full bg-zinc-800 px-3 py-1 text-xs text-zinc-300"
                  >
                    {genre}
                  </span>
                ))}
              </div>
            )}

            {movie.trailerLink && (
              <a
                href={movie.trailerLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-sm text-green-400 hover:text-green-300"
              >
                Watch Trailer →
              </a>
            )}

            <div className="mt-8">
              <h2 className="mb-3 text-lg font-semibold text-zinc-100">Reviews</h2>
              {movie.reviewIds?.length > 0 ? (
                <ul className="space-y-3">
                  {movie.reviewIds.map((review) => (
                    <li
                      key={review.id}
                      className="rounded-md bg-zinc-800 p-4 text-sm text-zinc-300"
                    >
                      {review.body}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm text-zinc-500">No reviews yet.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
