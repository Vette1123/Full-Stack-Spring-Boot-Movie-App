import { useState, useEffect, useRef } from 'react'
import { useParams } from 'react-router'
import { MovieTrailer } from '../../models/Movie'
import moviesServices from '../../services/MovieService'
import './Trailers.scss'

interface videoProps {
  item: MovieTrailer
  key: number
}
const VideoList = () => {
  const { id } = useParams()
  const [videos, setVideos] = useState<MovieTrailer[]>([])

  const getVideos = async () => {
    if (id) {
      const response = await moviesServices.getTrailers(id)
      if (response.status === 200 && response.data) {
        setVideos(response.data.results.slice(0, 3))
      }
    }
  }

  useEffect(() => {
    getVideos()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      {videos.map((item, index) => (
        <Video key={index} item={item} />
      ))}
    </>
  )
}
const Video = (props: videoProps) => {
  const { item } = props
  const iframeRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    if (iframeRef.current) {
      const height = (iframeRef?.current?.offsetWidth * 9) / 16 + 'px'
      iframeRef?.current?.setAttribute('height', height)
    }
  }, [])

  return (
    <div className='video'>
      <div className='video__title'>
        <h2>{item.name}</h2>
      </div>
      <iframe
        src={`https://www.youtube.com/embed/${item.key}`}
        ref={iframeRef}
        width='100%'
        title='video'
      ></iframe>
    </div>
  )
}

export default VideoList
