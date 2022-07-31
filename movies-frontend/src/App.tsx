import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom'
import Home from './pages/Home'
import MovieDetails from './pages/MovieDetails'
import Header from './components/Header'
import Footer from './components/Footer'
import 'swiper/css'
import './App.scss'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='movies' element={<Home />} />
        <Route path='movies/:id' element={<MovieDetails />} />
        <Route path='*' element={<Navigate to='/movies' replace />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
