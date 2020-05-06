import React from 'react';

import SearchBar from './SearchBar';
import MovieList from './MovieList';
import tmdb from './tmdb';

// DEF: Access key
require('dotenv').config();

class App extends React.Component {
    state = ({
        movies: []
    })

    onFormSubmit = async (term) => {
        const response = await tmdb.get('/search/movie', {
            params: {
                api_key: process.env.REACT_APP_API_KEY,
                query: term
            }
        })

        this.setState({
            movies: response.data.results
        });
    }

    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onFormSubmit}/>
                <MovieList movies={this.state.movies}/>
            </div>
        )
    }
}

export default App;