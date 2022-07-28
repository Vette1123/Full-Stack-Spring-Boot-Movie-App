package net.talaatharb.movies.api;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import lombok.RequiredArgsConstructor;
import net.talaatharb.movies.facades.MovieFacade;

@RestController
@RequiredArgsConstructor
@RequestMapping(path = "/api/v1/movies")
public class MoviesController {
	
	private final MovieFacade movieFacade;
	
	@GetMapping(path = "/popular")
	public ResponseEntity<Object> getPopularMovies(@RequestParam Integer page){
		return new ResponseEntity<>(movieFacade.getPopularMovies(page), HttpStatus.OK);
	}
  	@GetMapping(path = "/{id}")
	public ResponseEntity<Object> getMovie(@PathVariable Integer id){
		return new ResponseEntity<>(movieFacade.getMovie(id), HttpStatus.OK);
	}
	@GetMapping(path = "/movie")
	public ResponseEntity<Object> searchMovie(@RequestParam String title){
		return new ResponseEntity<>(movieFacade.searchMovie(title), HttpStatus.OK);
	}

}
