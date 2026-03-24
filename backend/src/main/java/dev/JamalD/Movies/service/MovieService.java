package dev.JamalD.Movies.service;

import dev.JamalD.Movies.dto.MovieRequestDto;
import dev.JamalD.Movies.dto.MovieResponseDto;
import dev.JamalD.Movies.model.Movie;

import java.util.List;
import java.util.Optional;

public interface MovieService {
  List<Movie> getAllMovies();

  Optional<Movie> getMovieByImdbId(String imdbId);

  MovieResponseDto createMovie(MovieRequestDto movieDto);
}
