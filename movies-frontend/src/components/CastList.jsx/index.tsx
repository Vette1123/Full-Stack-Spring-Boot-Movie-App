import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { Url } from '../../utils/Constants'
import { MovieCast } from '../../models/Movie'
import moviesServices from '../../services/MovieService'
import './CastList.scss'

const { w500Image } = Url

const CastList = () => {
  const { id } = useParams()
  const [casts, setCasts] = useState<MovieCast[]>([])

  const getCredits = async () => {
    if (id) {
      const response = await moviesServices.getCast(id)
      if (response?.data && response?.status === 200) {
        setCasts(response?.data?.cast.slice(0, 5))
      }
    }
  }
  useEffect(() => {
    getCredits()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className='casts'>
      {casts?.map((item, index) => (
        <div key={index} className='casts__item'>
          <div
            className='casts__item__img'
            style={{
              backgroundImage: `url(${w500Image(item?.profile_path)})`,
            }}
          ></div>
          <p className='casts__item__name'>{item?.name}</p>
        </div>
      ))}
    </div>
  )
}
export default CastList
