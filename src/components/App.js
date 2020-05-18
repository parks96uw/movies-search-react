import React from 'react';

import SearchBar from './SearchBar';
import MovieList from './MovieList';
import Cart from './Cart';
import tmdb from '../api/tmdb';
import '../css/App.css';

import Pagination from "react-js-pagination";

// DEF: Access key
require('dotenv').config();

class App extends React.Component {
    state = ({
        movies: [],
        term: '',
        activePage: 1,
        totalPages: 0,
        itemsPerPage: 20
    })

    onFormSubmit = async (term, page) => {
        const response = await tmdb.get('/search/movie', {
            params: {
                api_key: process.env.REACT_APP_API_KEY,
                query: term,
                language: "EN",
                include_adult: false,
                page: page
            }
        })

        this.setState({
            movies: response.data.results,
            term: term,
            totalPages: response.data.total_results,
            activePage: page
        });
    }

    // DEF: Update the currently viewed page on MovieList
    //      Also fetch the next page's results
    // TODO: Revise comment. Note: the setState asychronous request
    onPageChange = (page) => {
        this.setState({activePage: page});
        this.onFormSubmit(this.state.term, page);
    }

    // DEF: Cart information
    //      Check local storage if added
    //      Should have ability to delete movie
    //      Cart should automatically render upon loading page
    // Store cart information in movie

    // TODO: Revise comment
    //       Pagination will show when we have results > 0
    render() {
        return (
            <div className="ui container">
                <SearchBar 
                    onFormSubmit={this.onFormSubmit} 
                <Cart/>
                {this.state.totalPages > 0 && <Pagination
                    itemClass="page-item"
                    linkClass="page-link"
                    innerClass="pagination justify-content-end"
                    activePage={this.state.activePage}
                    itemsCountPerPage={this.state.itemsPerPage}
                    totalItemsCount={this.state.totalPages}
                    onChange={this.onPageChange.bind(this)}
                />}
                <MovieList 
                    onPageChange={this.onPageChange} 
                    term={this.state.term} 
                    movies={this.state.movies} 
                />
            </div>
        )
    }
}

export default App;