import { useEffect, useState } from 'react'
import MovieCard from '../MovieCard'
import Input from '../SearchInput'
import movieServices from '../../services/MovieService'
import './MovieGrid.scss'

function MovieCardGrid(props: any) {
  const { items, checkIfFilteredItemsLength } = props
  const [itemsFiltered, setItemsFiltered] = useState(items)

  useEffect(() => {
    setItemsFiltered(items)
  }, [items])

  const setFilteredItems = (items: any) => {
    setItemsFiltered(items)
  }

  return (
    <>
      <div className='movie-nav'>
        <h2>Trending Movies</h2>
        <MovieSearch
          setFilteredItems={setFilteredItems}
          items={items}
          checkIfFilteredItemsLength={checkIfFilteredItemsLength}
        />
      </div>
      <div className='movie-grid'>
        {itemsFiltered?.map((item: any) => (
          <MovieCard key={item.id} item={item} />
        ))}
        {/* if no filtered items show */}
        {itemsFiltered.length === 0 && (
          <div className='no-results'>
            <h3>No results found</h3>
            <p>Try searching for a different movie.</p>
          </div>
        )}
      </div>
    </>
  )
}

const MovieSearch = (props: any) => {
  const [keyword, setKeyword] = useState('')
  const { setFilteredItems, items, checkIfFilteredItemsLength } = props
  // search on keystroke
  const onUserInput = async () => {
    if (keyword.length >= 2) {
      const response = await movieServices.searchForMovie(keyword)
      if (response.status === 200 && response.data) {
        setFilteredItems(response.data.results)
      }
    }
  }
  const checkIfInputIsEmpty = () => {
    if (keyword === '') {
      setFilteredItems(items)
    }
  }

  useEffect(() => {
    checkIfFilteredItemsLength(keyword?.length)
    // eslint-disable-next-line
  }, [keyword])

  // debouncing search
  useEffect(() => {
    checkIfInputIsEmpty()
    const timer = setTimeout(() => {
      onUserInput()
    }, 600)
    return () => clearTimeout(timer)
    // eslint-disable-next-line
  }, [keyword])

  return (
    <div className='movie-search'>
      <Input
        type='text'
        placeholder='Search Me'
        value={keyword}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setKeyword(e.target.value)
        }
      />
    </div>
  )
}

export default MovieCardGrid
