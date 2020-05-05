import React from 'react';

import SearchBar from './SearchBar';

class App extends React.Component {

    onFormSubmit = (event) => {
        console.log(event);
    }

    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onFormSubmit}/>
            </div>
        )
    }
}

export default App;