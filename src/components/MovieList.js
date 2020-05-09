import React, { useState} from 'react';

import MovieItem from './MovieItem';

const MovieList = ({ term, movies }) => {
    const [pageNumber, setPageNumber] = useState(1); // Default page is number 1

    const renderedList = movies.map((movie) => {
        return <MovieItem key={movie.id} movie={movie}/>;
    });



    // TODO: Add a loader / spinner while returning list of movies
    return ( 
        <div>
            <div>{pageNumber}</div>
            <button onClick={event => setPageNumber(pageNumber - 1)} className="ui button">Back</button>
            <button onClick={event => setPageNumber(pageNumber + 1)} className="ui button">Next</button>
            <div className="movie-list ui four doubling cards">{renderedList}</div>
        </div>
    )
}

export default MovieList;