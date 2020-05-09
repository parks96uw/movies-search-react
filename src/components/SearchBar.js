import React from 'react';

import '../css/SearchBar.css';

class SearchBar extends React.Component {
    state = {
        term: ''
    }

    // DEF: Prevent the form from submitting the page
    //      Callback to the App component passing up the term value entered on search
    //      Default page number to be 1
    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onFormSubmit(this.state.term, 1);
    }

    // DEF: Update the state when there is a change in input
    onTermSubmit = (event) => {
        this.setState({ term: event.target.value });
    }

    render() {
        return (
            <div className="search-bar-container">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="input-bar">
                        <input
                            type="text"
                            value={this.state.term}
                            onChange={(e) => this.onTermSubmit(e)}
                        />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;