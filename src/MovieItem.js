import React from 'react';

const MovieItem = ({movie}) => {
    console.log(movie);
    
    // TODO: If image not available    
    const imgPath = "https://image.tmdb.org/t/p/w500/" + movie.poster_path;
    
    return (
        <div className="item">
            <img src={imgPath} alt={movie.title}/>
            <h2>{movie.title}</h2>
            <div className="content">
                {movie.overview}
                {movie.release_date}
            </div>
        </div>
    )
}

export default MovieItem;