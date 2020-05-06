import React from 'react';

import MovieItem from './MovieItem';

const MovieList = ({ movies }) => {
    console.log(movies);
    const renderedList = movies.map((movie) => {
        return <MovieItem key={movie.id} movie={movie}/>;
    })

    return ( 
        <div className="ui divided items">{renderedList}</div>
    )
}

export default MovieList;