# ./Dockerfile

# Multi-stage build for Spring Boot application
FROM maven:3.9-eclipse-temurin-21-alpine  as builder
WORKDIR /build


# Copy and build the application
COPY pom.xml .
RUN mvn dependency:go-offline
COPY src ./src
RUN mvn clean package -DskipTests

# Runtime stage
FROM eclipse-temurin:21-jre-alpine
WORKDIR /app

# Copy the built JAR from builder stage
COPY --from=builder /build/target/*.jar app.jar

# Switch to nonroot user for security
RUN addgroup -S appgroup && adduser -S appuser -G appgroup 
USER appuser

# Expose application port
EXPOSE 8080

# Run the application
CMD ["java", "-jar", "app.jar"]

