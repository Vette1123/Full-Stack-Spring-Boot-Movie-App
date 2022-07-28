import { Movie } from '../models/Movie';
import { MoviePage } from '../models/MoviePage';
import HttpClient from './HttpClient';

export default class MovieService{

    constructor(private httpClient: HttpClient){}

    getPopularMovies(page = 1): Promise<MoviePage> {
        return Promise.resolve({ page: page, results: [] });
    }
    
    getMovie(id: string): Promise<Movie> {
        return Promise.resolve({ });
    }
    
    searchForMovie(query: string): Promise<MoviePage> {
        return Promise.resolve({ page: 1, results: [] });
    }
}

