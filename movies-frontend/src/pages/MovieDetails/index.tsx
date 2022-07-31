import { useEffect, useState, useRef } from 'react'
import { useParams } from 'react-router'
import { Movie } from '../../models/Movie'
import moviesServices from '../../services/MovieService'
import { revenueCommaSeperator, Url } from '../../utils/Constants'
import { FaImdb } from 'react-icons/fa'
import { MdMonetizationOn, MdNewReleases } from 'react-icons/md'
import moment from 'moment'
import CastList from '../../components/CastList.jsx'
import VideoList from '../../components/Trailers'
import './MovieDetails.scss'
import Review from '../../components/Review'

const Detail = () => {
  const { id } = useParams()
  const [singleMovie, setSingleMovie] = useState<Movie>({} as Movie)

  const getMovieDetails = async () => {
    const response = await moviesServices.getMovie(id as string)
    if (response.status === 200 && response.data) {
      setSingleMovie(response.data)
    }
  }

  useEffect(() => {
    getMovieDetails()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // make page on poster when render
  const posterRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    posterRef.current?.scrollIntoView()
  }, [])

  return (
    <>
      <div
        className='banner'
        style={{
          backgroundImage: `url(
          ${Url.originalImage(
            singleMovie?.backdrop_path
              ? singleMovie.backdrop_path
              : singleMovie.poster_path
          )}
          )`,
        }}
        ref={posterRef}
      ></div>
      <div className='mb-3 movie-content'>
        <div className='movie-content__poster'>
          <div
            className='movie-content__poster__img'
            style={{
              backgroundImage: `url(
              ${Url.originalImage(
                singleMovie?.poster_path
                  ? singleMovie.poster_path
                  : singleMovie.backdrop_path
              )}
              )`,
            }}
          ></div>
        </div>
        <div className='movie-content__info'>
          <h1 className='title'>{singleMovie?.title}</h1>
          {/* show vote average */}
          <div className='movie-content__info__row'>
            <div className='movie-content__info__vote'>
              <FaImdb size={65} />
              <span className='movie-content__info__vote__average'>
                {singleMovie?.vote_average} / 10
              </span>
            </div>
            <div className='movie-content__info__release'>
              <MdNewReleases size={65} />
              <span className='movie-content__info__release__date'>
                {moment(singleMovie?.release_date).format('ll')}
              </span>
            </div>
            <div className='movie-content__info__revenue'>
              <MdMonetizationOn size={65} />
              <span className='movie-content__info__revenue__amount'>
                {/* put , between numbers */}
                {singleMovie?.revenue
                  ? revenueCommaSeperator(singleMovie.revenue.toLocaleString())
                  : 'TBA'}
                {' $'}
              </span>
            </div>
          </div>
          <p className='overview'>{singleMovie?.overview}</p>
          <div className='cast'>
            <div className='section__header'>
              <h2>Casts</h2>
            </div>
            <CastList />
          </div>
        </div>
      </div>
      <div className='container'>
        <VideoList />
        <Review />
      </div>
    </>
  )
}

export default Detail
