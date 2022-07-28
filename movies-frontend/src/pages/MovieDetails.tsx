import React from 'react';
import { Link,  useParams } from 'react-router-dom';
import './MovieDetails.scss';

function MovieDetails() {
    let { id } = useParams();

    return <div className='movie-details-root'>
        <div className="movie-details-section">
            <Link to="/">Back</Link>
            <h2>Movie</h2>
            <div>{id}</div>
        </div>
    </div>;
}

export default MovieDetails;