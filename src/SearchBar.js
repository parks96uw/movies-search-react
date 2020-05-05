import React from 'react';

class SearchBar extends React.Component {
    state = {
        term: ''
    }

    // DEF: Prevent the form from submitting the page
    //      Callback to the App component passing up the term value entered on search
    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onFormSubmit(this.state.term);
    }

    // DEF: Update the state when there is a change in input
    onTermSubmit = (event) => {
        this.setState({ term: event.target.value });
    }

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <h1>Movie Search</h1>
                    </div>
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