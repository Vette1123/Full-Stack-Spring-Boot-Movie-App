export const Url = {
  BASE_URL: 'http://localhost:8080/api/v1/movies',
  POPULAR_MOVIES: '/popular',
  SEARCH_MOVIE: '/search',

  // original dimensions image
  originalImage: (imgPath: string) =>
    `https://image.tmdb.org/t/p/original${imgPath}`,

  // 500 dimmentions image
  w500Image: (imgPath: string) => `https://image.tmdb.org/t/p/w500${imgPath}`,
  // get cast url
  CAST_URL: (id: string) =>
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.REACT_APP_API_KEY}`,
  // get trailers url
  TRAILERS_URL: (id: string) =>
    `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}`,
  // get reviews url
  REVIEWS_URL: (id: string) =>
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${process.env.REACT_APP_API_KEY}`,
}

export const revenueCommaSeperator = (value: string) => {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
export const scale = (
  num: number,
  in_min: number,
  in_max: number,
  out_min: number,
  out_max: number
) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}
