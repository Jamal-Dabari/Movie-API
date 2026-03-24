package dev.JamalD.Movies.service;

import dev.JamalD.Movies.dto.MovieDto;
import dev.JamalD.Movies.model.Movie;
import dev.JamalD.Movies.repository.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MovieServiceImp implements MovieService {

  @Autowired
  private MovieRepository movieRepository;

  @Override
  public List<Movie> getAllMovies() {
    return movieRepository.findAll();
  }

  @Override
  public Optional<Movie> getMovieByImdbId(String imdbId) {
    return movieRepository.findByImdbId(imdbId);
  }

  @Override
  public Movie createMovie(MovieDto movieDto) {
    Movie movie = new Movie();
    movie.setImdbId(movieDto.imdbId());
    movie.setTitle(movieDto.title());
    Movie savedMovie = movieRepository.save(movie);
    
    return movie
  }
}
