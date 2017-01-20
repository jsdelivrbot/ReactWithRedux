import React, { Component } from 'react';

////When user inputs, search Youtube
//const SearchBar = () => {
//  return <input />
//};

class SearchBar extends Component {
  //initialize state inside the constructor. All class based components have state.
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }
  render() {
  //event handler for input. The event variable is returned by the event handler
    return (
        <div>
          <input
            value = { this.state.term }
            onChange={event => this.setState({ term: event.target.value })} />
        </div>
    );
  }
}

export default SearchBar;
