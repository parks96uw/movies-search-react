import React from 'react';

import '../css/MovieItem.css';
import logo from '../img/tmdb.png';

const MovieItem = ({ movie }) => {
    // TODO: Alter height image for stock images
    // DEF: If the movie poster doesn't exist, use the stock TMDB logo
    const imagePath = !movie.poster_path ? logo : "https://image.tmdb.org/t/p/w342/" + movie.poster_path;

    // TODO: Add to cart logic
    return (
        <div className="card">
            <div className="image">
                <img className="movie-image" src={imagePath} alt="Poster not found" />
            </div>
            <div className="content">
                <div className="header">
                    <h2 className="movie-title">{movie.title}</h2>
                    <button className="movie-add ui basic button">Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default MovieItem;