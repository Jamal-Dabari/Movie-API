package dev.JamalD.Movies.controller;

import dev.JamalD.Movies.model.Movie;
import dev.JamalD.Movies.service.MovieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/movies")
public class MovieController {

    @Autowired
    private MovieService movieService;

    @GetMapping
    public ResponseEntity<List<Movie>> getAllMovies() {
        return ResponseEntity.ok(movieService.getAllMovies());
    }

    @GetMapping("/{imdbId}")
    public ResponseEntity<Movie> getMovieByImdbId(@PathVariable String imdbId) {
        Optional<Movie> movie = movieService.getMovieByImdbId(imdbId);
        return movie.map(ResponseEntity::ok)
                    .orElse(ResponseEntity.notFound().build());
    }
}
