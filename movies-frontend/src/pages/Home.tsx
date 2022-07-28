import React, { useEffect, useState } from 'react';
import MovieCardGrid from '../components/MovieCardGrid';
import './Home.scss';
import { getDefaultMovieService } from '../utils/MovieServiceUtils';
import { MovieSummary } from '../models/MovieSummary';

function Home() {

    const movieService = getDefaultMovieService();
    const [popularMovies, setPopularMovies] = useState<MovieSummary[]>([]);

    useEffect(()=>{
        movieService.getPopularMovies().then(moviePage => setPopularMovies(moviePage.results));
    });

    return <div className='home-page'>
        <div className="search-section">
            <input type="text" placeholder='Search...' />
            <button>Search</button>
        </div>
        <section className='main-content'>
            <div className="popular-movies-section">
                <h2>Popular Movies</h2>
                <MovieCardGrid movies={popularMovies}/>
            </div>
        </section>
    </div>;
}

export default Home;