package dev.JamalD.Movies;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class debug implements CommandLineRunner {

  @Value("${MONGO_CLUSTER}")
  private String mongoCluster;

  @Override
  public void run(String... args) {
    System.out.println("Value of MONGO_CLUSTER environment variable: " + mongoCluster);
  }
}
