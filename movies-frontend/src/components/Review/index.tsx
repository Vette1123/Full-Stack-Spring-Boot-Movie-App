import moment from 'moment'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { MovieReview } from '../../models/Movie'
import { Swiper, SwiperSlide } from 'swiper/react'
import moviesServices from '../../services/MovieService'
import './Review.scss'

interface ReviewProps {
  item: MovieReview
  className: string
}

const Review = () => {
  const { id } = useParams<{ id: string }>()
  const [review, setReview] = useState<MovieReview[]>([])

  const getUserReview = async () => {
    if (id) {
      const response = await moviesServices.getReviews(id)
      if (response.status === 200 && response.data) {
        setReview(response?.data?.results)
      }
    }
  }

  useEffect(() => {
    getUserReview()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      {review.length > 0 && (
        <Swiper
          grabCursor={true}
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
        >
          {review?.map((item, index) => (
            <SwiperSlide key={index}>
              {({ isActive }) => (
                <ReviewSlide
                  item={item}
                  className={`${isActive ? 'active' : ''}`}
                />
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      )}
      {review.length === 0 && (
        <div className='review__empty'>
          <h3>There is no review for this movie</h3>
        </div>
      )}
    </>
  )
}
const ReviewSlide = (props: ReviewProps) => {
  const { item } = props

  return (
    <>
      <div className='board'>
        <h2>Some Reviews from IMDB</h2>
        <div className='board__flex'>
          <div className='board__flex__review'>
            {/* set dangeriouscontent html */}
            <p dangerouslySetInnerHTML={{ __html: item?.content }}></p>
          </div>
          <div className='board__flex__profile'>
            <img
              src={
                `https://image.tmdb.org/t/p/w500/${item?.author_details?.avatar_path}` ||
                item?.author_details?.avatar_path.substring(1)
              }
              alt=''
            />
            <div>
              <h3>
                {item?.author ? item?.author : item?.author_details?.username}
              </h3>
              <span>
                {moment(
                  item?.created_at ? item?.created_at : item?.updated_at
                ).fromNow()}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Review
