package dev.JamalD.Movies.repository;

import dev.JamalD.Movies.model.Movie;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface MovieRepository extends MongoRepository<Movie, ObjectId> {

  Optional<Movie> findByImdbId(String imdbId);

  List<Movie> findByGenresContaining(String genre);

}
