import React from 'react';

import MovieItem from './MovieItem';

const MovieList = ({ movies }) => {
    const renderedList = movies.map((movie) => {
        return <MovieItem key={movie.id} movie={movie}/>;
    });

    // TODO: Add a loader / spinner while returning list of movies
    return ( 
        <div className="movie-list ui four doubling cards">{renderedList}</div>
    )
}

export default MovieList;