import React from 'react';

import './MovieItem.css';

const MovieItem = ({movie}) => {
    const imgPath = "https://image.tmdb.org/t/p/w500/" + movie.poster_path;

    // TODO: Change how we deal with images that are null
    //       Do not show the image

    return (
        <div className="ui card">
            <div className="image">
              <img className="movie-image" src={imgPath} alt={movie.title}/>
            </div>
            <div className="content">
                <div className="header">
                    <h2 className="movie-title">{movie.title}</h2>
                    <button className="movie-add ui basic button">Add to Favorites</button>
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