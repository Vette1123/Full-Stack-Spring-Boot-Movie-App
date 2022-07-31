import { useEffect, useState } from 'react'
import movieServices from '../../services/MovieService'
import HeaderSlider from '../../components/HeaderSlider'
import { getDummyMoviePage, MoviePage } from '../../models/MoviePage'
import { Movie } from '../../models/Movie'
import MovieCardGrid from '../../components/MovieGrid'
import { OutlineButton } from '../../components/Button'

const Home = () => {
  const [popularMovies, setPopularMovies] = useState<MoviePage>(
    getDummyMoviePage()
  )
  // eslint-disable-next-line
  const [newOnLoadResults, setNewOnLoadResults] = useState<MoviePage>()
  const [topFiveRatedMovies, setTopFiveRatedMovies] = useState<Movie[]>([])
  const [checkFilteredItemsLength, setCheckFilteredItemsLength] = useState(0)
  const [page, setPage] = useState(1)

  const getPopularMovies = async () => {
    const response = await movieServices.getPopularMovies()
    if (response.status === 200 && response.data) {
      setPopularMovies(response?.data)
      setTopFiveRatedMovies(response?.data?.results.slice(0, 5))
    }
  }

  useEffect(() => {
    getPopularMovies()
  }, [])

  // handle pagination
  const handleOnLoadMore = async () => {
    const response = await movieServices.getPopularMovies(page + 1)
    if (response.status === 200 && response.data) {
      setNewOnLoadResults(response?.data)
      setPage(page + 1)
      setPopularMovies({
        ...popularMovies,
        results: [...popularMovies?.results, ...response?.data?.results],
      })
    }
  }
  const checkIfFilteredItemsLength = (length: number) => {
    setCheckFilteredItemsLength(length)
  }

  return (
    <>
      <HeaderSlider topFiveRatedMovies={topFiveRatedMovies} />
      <div className='container'>
        <MovieCardGrid
          items={popularMovies?.results}
          checkIfFilteredItemsLength={checkIfFilteredItemsLength}
        />
        {!checkFilteredItemsLength && (
          <div className='movie-grid__loadmore'>
            <OutlineButton className='small' onClick={handleOnLoadMore}>
              Load more
            </OutlineButton>
          </div>
        )}
      </div>
    </>
  )
}

export default Home
