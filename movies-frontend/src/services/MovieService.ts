import { fetchData } from './api'
import { MoviePage } from '../models/MoviePage'
import { Movie } from '../models/Movie'
import { Url } from '../utils/Constants'

const {
  BASE_URL,
  POPULAR_MOVIES,
  SEARCH_MOVIE,
  CAST_URL,
  TRAILERS_URL,
  REVIEWS_URL,
} = Url

const moviesServices = {
  getPopularMovies: async (page = 1) => {
    return await fetchData<MoviePage>(
      BASE_URL + POPULAR_MOVIES + `?page=${page}`,
      'GET',
      null
    )
  },

  getMovie: async (id: string) => {
    return await fetchData<Movie>(BASE_URL + '/' + id, 'GET', null)
  },

  searchForMovie: async (query: string) => {
    return await fetchData<MoviePage>(
      BASE_URL + SEARCH_MOVIE + `?title=${query}`,
      'GET',
      null
    )
  },
  getCast: async (id: string) => {
    return await fetchData<any>(CAST_URL(id), 'GET', null)
  },
  getTrailers: async (id: string) => {
    return await fetchData<any>(TRAILERS_URL(id), 'GET', null)
  },
  getReviews: async (id: string) => {
    return await fetchData<any>(REVIEWS_URL(id), 'GET', null)
  },
}

export default moviesServices
