import { Swiper, SwiperSlide } from 'swiper/react'
import { Movie } from '../../models/Movie'
import { Url } from '../../utils/Constants'
import './HeroSlider.scss'

interface SliderProps {
  topFiveRatedMovies: Movie[]
}
interface SwiperSlideProps {
  item: Movie
  className: string
}

const { originalImage, w500Image } = Url

const HeaderSlider = ({ topFiveRatedMovies }: SliderProps) => {
  return (
    <div className='hero-slide'>
      <Swiper grabCursor={true} slidesPerView={1} spaceBetween={30}>
        {topFiveRatedMovies?.map((item, index) => (
          <SwiperSlide key={index}>
            {({ isActive }) => (
              <HeroSlideItem
                item={item}
                className={`${isActive ? 'active' : ''}`}
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

const HeroSlideItem = (props: SwiperSlideProps) => {
  const { item } = props

  return (
    <div
      className={`hero-slide__item ${props.className}`}
      style={{
        backgroundImage: `url(
        ${originalImage(
          item.backdrop_path ? item.backdrop_path : item.poster_path
        )}
      )`,
      }}
    >
      <div className='hero-slide__item__content container'>
        <div className='hero-slide__item__content__info'>
          <h2 className='title'>{item.title}</h2>
          <div className='overview'>{item.overview}</div>
        </div>
        <div className='hero-slide__item__content__poster'>
          <img src={w500Image(item.poster_path)} alt='' />
        </div>
      </div>
    </div>
  )
}
export default HeaderSlider
