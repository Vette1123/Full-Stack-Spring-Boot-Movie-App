import { Link } from 'react-router-dom'
import Button from '../Button'
import { Url } from '../../utils/Constants'
import { MdDirections } from 'react-icons/md'
import './MovieCard.scss'

const { w500Image } = Url

const MovieCard = (props: any) => {
  const { item } = props

  const link = '/movies/' + item.id

  const bg = w500Image(item.poster_path || item.backdrop_path)

  return (
    <Link to={link}>
      <div className='movie-card' style={{ backgroundImage: `url(${bg})` }}>
        <Button>
          <MdDirections size={30} />
        </Button>
      </div>
      <h3>{item.title || item.name}</h3>
    </Link>
  )
}

export default MovieCard
