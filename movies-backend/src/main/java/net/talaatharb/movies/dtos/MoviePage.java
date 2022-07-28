package net.talaatharb.movies.dtos;

import java.util.List;

import lombok.Data;

@Data
public class MoviePage {

	private Integer page;
	private List<MovieDto> results;
}
