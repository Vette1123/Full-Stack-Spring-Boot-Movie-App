package net.talaatharb.movies.facades;

import lombok.RequiredArgsConstructor;
import net.talaatharb.movies.services.MovieDBService;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class MovieFacade {
	
	private final MovieDBService movieDBService;
	
	public Object getPopularMovies(Integer page) {
		return movieDBService.getPopularMovies(page);
	}
	 public Object getMovie(Integer id) {
		return movieDBService.getMovie(id);
	 }
	 public Object searchMovie(String title) {
		return movieDBService.searchMovie(title);
	 }
}
