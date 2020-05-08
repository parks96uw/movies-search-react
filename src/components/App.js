import React from 'react';

import SearchBar from './SearchBar';
import MovieList from './MovieList';
import tmdb from '../api/tmdb';
import '../css/App.css';


// DEF: Access key
require('dotenv').config();

class App extends React.Component {
    state = ({
        movies: [],
        pageNumber: 1
    })


    // TODO: Pagination -- flipping between results of movies
    //       Needs to take in parameter of page number
    //       Revise the GET request -- needs to take into account pages returned
    //       Default page to begin on -- PAGE 1
    //       Set default on APP -- callback on movielist to return new page number
    onFormSubmit = async (term) => {
        const response = await tmdb.get('/search/movie', {
            params: {
                api_key: process.env.REACT_APP_API_KEY,
                query: term,
                language: "EN",
                include_adult: false,
                page: this.pageNumber // revisit here
            }
        })

        this.setState({
            movies: response.data.results
        });
    }

    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onFormSubmit} />
                <MovieList movies={this.state.movies} />
            </div>
        )
    }
}

export default App;