package net.talaatharb.movies.dtos;

import lombok.Data;

import javax.persistence.ElementCollection;
import javax.persistence.Id;
import java.util.List;

@Data
public class MovieDto {
    private Integer id;
    private String title;
    private String overview;
    private String poster_path;
    private String backdrop_path;
    private Integer vote_average;
    private Integer vote_count;
    private boolean adult;
    private String release_date;
    private String original_title;
    private String revenue;
}
