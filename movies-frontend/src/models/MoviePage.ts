import { Movie } from './Movie'

export interface MoviePage {
  page: number
  results: Movie[]
}

export const getDummyMoviePage = (): MoviePage => ({
  page: 1,
  results: [
    {
      adult: false,
      backdrop_path: '/fCayJrkfRaCRCTh8GqN30f8oyQF.jpg',
      id: 475557,
      original_title: 'Joker',
      overview:
        'In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker.',
      poster_path: '/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg',
      release_date: '2019-10-04',
      title: 'Joker',
      vote_average: 8.6,
      vote_count: 10000,
      revenue: '1000000000',
    },
  ],
})
