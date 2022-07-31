export interface Movie {
  adult: boolean
  backdrop_path: string
  id: number
  original_title: string
  overview: string
  poster_path: string
  release_date: string
  title: string
  vote_average: number
  vote_count: number
  revenue: string
}

export interface MovieReview {
  author: string
  author_details: {
    name: string
    username: string
    avatar_path: string
    rating: number
  }
  content: string
  created_at: string
  id: string
  updated_at: string
  url: string
}

export interface MovieCast {
  adult: boolean
  gender: number
  id: number
  known_for_department: string
  name: string
  original_name: string
  popularity: number
  profile_path: string
  cast_id: number
  character: string
  credit_id: string
  order: number
}

export interface MovieTrailer {
  iso_639_1: string
  iso_3166_1: string
  name: string
  key: string
  site: string
  size: number
  type: string
  official: boolean
  published_at: string
  id: string
}
