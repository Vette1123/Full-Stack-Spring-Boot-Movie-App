package net.talaatharb.movies.services;

import lombok.RequiredArgsConstructor;
import net.talaatharb.movies.dtos.MovieDto;
import net.talaatharb.movies.dtos.MoviePage;
import net.talaatharb.movies.mappers.MovieMapper;
import net.talaatharb.movies.model.Movie;
import net.talaatharb.movies.reposotiry.MovieRepository;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
@RequiredArgsConstructor
public class MovieDBService {

	private final RestTemplate restTemplate;
	private final MovieMapper movieMapper;
	private final MovieRepository movieReposoitry;



	private String apiKey = "a97243d7813d31446f6c43284e6854d5";

	private String apiUrl = "https://api.themoviedb.org/3";

	private static final String URL_SEGEMENT_FOR_POPULAR = "/movie/popular";

	public MoviePage getPopularMovies(Integer page) {
		String urlForPopularMovies = apiUrl + URL_SEGEMENT_FOR_POPULAR + "?api_key=" + apiKey + "&page="
				+ page.intValue();
		System.out.println(urlForPopularMovies);
		return restTemplate.getForEntity(urlForPopularMovies, MoviePage.class).getBody();
	}

	//	search database first for a movie, if not found, then call the api to get the movie details and save it to the database
	public Movie getMovie(Integer id) {
		String urlForMovie = apiUrl + "/movie/" + id + "?api_key=" + apiKey;
		boolean isMovieInDB = movieReposoitry.existsById(id);
		if (isMovieInDB) {
			return movieReposoitry.findById(id).get();
		} else {
			MovieDto movieDto = restTemplate.getForEntity(urlForMovie, MovieDto.class).getBody();
			System.out.println(movieDto);
			Movie movie = movieMapper.map(movieDto);
			System.out.println(movie);
			movieReposoitry.save(movie);
			return movie;
		}
	}
	public Object searchMovie(String title) {
		String urlForMovie = apiUrl + "/search/movie?api_key=" + apiKey + "&query=" + title;
		System.out.println(urlForMovie);
		return restTemplate.getForEntity(urlForMovie, Object.class).getBody();
	}
}
