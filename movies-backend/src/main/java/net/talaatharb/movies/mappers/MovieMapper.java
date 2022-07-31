package net.talaatharb.movies.mappers;

import net.talaatharb.movies.dtos.MovieDto;
import net.talaatharb.movies.model.Movie;
import org.springframework.stereotype.Component;

@Component
public class MovieMapper {


   public Movie map (MovieDto movieDto) {
        Movie movie = new Movie();
            movie.setId(movieDto.getId());
            movie.setTitle(movieDto.getTitle());
            movie.setOverview(movieDto.getOverview());
            movie.setPoster_path(movieDto.getPoster_path());
            movie.setBackdrop_path(movieDto.getBackdrop_path());
            movie.setVote_average(movieDto.getVote_average());
            movie.setVote_count(movieDto.getVote_count());
            movie.setAdult(movieDto.isAdult());
            movie.setRelease_date(movieDto.getRelease_date());
            movie.setOriginal_title(movieDto.getOriginal_title());
            movie.setRevenue(movieDto.getRevenue());
        return movie;
    }
}
