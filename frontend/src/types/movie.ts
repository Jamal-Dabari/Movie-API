export interface Review {
  id: string;
  body: string;
}

export interface Movie {
  id: string;
  imdbId: string;
  title: string;
  releaseDate: string;
  trailerLink: string;
  poster: string;
  genres: string[];
  backdrops: string[];
  reviewIds: Review[];
}
