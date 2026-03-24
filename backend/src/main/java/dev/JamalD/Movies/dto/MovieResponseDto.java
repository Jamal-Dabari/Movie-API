package dev.JamalD.Movies.dto;

import org.bson.types.ObjectId;

public record MovieResponseDto(ObjectId id, String Title) {
}
