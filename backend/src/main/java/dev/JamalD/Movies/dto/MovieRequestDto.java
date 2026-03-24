package dev.JamalD.Movies.dto;

import java.util.List;

import org.bson.types.ObjectId;

import dev.JamalD.Movies.model.Review;

public record MovieRequestDto(ObjectId id, String imdbId, String title, String releaseDate, String trailerLink,
    String poster,
    List<String> genres, List<String> backdrops, List<Review> reviewIds) {

}
