FROM openjdk:17

ADD target/movies-backend-0.0.1-SNAPSHOT.jar docker-movies-backend.jar

EXPOSE 8080

ENTRYPOINT [ "java" , "-jar" , "docker-movies-backend.jar" ]

