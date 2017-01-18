import React, { Component } from 'react';

////When user inputs, search Youtube
//const SearchBar = () => {
//  return <input />
//};

class SearchBar extends Component {
  //initialize state inside the constructor
  constructor(props) {
    super(props);
    
    this.state = { term: '' };
  }
  render() {
  //event handler for input. The event variable is returned by the event handler
    return <input onChange={event => console.log(event.target.value)} />;
  }
}

export default SearchBar;
