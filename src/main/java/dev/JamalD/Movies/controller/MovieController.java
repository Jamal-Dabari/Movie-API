package dev.JamalD.Movies;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/Movies")
public class MovieController {
  @GetMapping
  public String allMovies() {
    return "HELP ME!!";
  }

}
