import FetchHttpClient from "../services/FetchHttpClient";
import MovieService from "../services/MovieService";

export function getDefaultMovieService(){

    const httpClient = new FetchHttpClient();
    const movieService = new MovieService(httpClient);

    return movieService;
}