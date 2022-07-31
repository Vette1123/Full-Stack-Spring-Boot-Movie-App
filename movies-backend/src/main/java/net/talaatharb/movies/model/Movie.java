package net.talaatharb.movies.model;

import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Entity
@Table
@Data
public class Movie {
    @Id
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
