import React from 'react';

import './MovieItem.css';

const MovieItem = ({movie}) => {
    const imgPath = "https://image.tmdb.org/t/p/w500/" + movie.poster_path;
    
    return (
        <div className="item">
            <div className="img">
              <img className="movie-image" src={imgPath} alt={movie.title}/>
            </div>
            <div className="content">
                <div className="header">
                    <h2>{movie.title}</h2>
                </div>
                <div className="description">
                    {movie.overview}
                </div>
                <div className="extra">
                    Released in {movie.release_date}
                </div>

            </div>
        </div>
    )
}

export default MovieItem;