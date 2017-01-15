import React, { Component } from 'react';

////When user inputs, search Youtube
//const SearchBar = () => {
//  return <input />
//};

class SearchBar extends Component {
  render() {
    return <input onChange={this.onInputChange} />;
  }

  //event handler for input. The event variable is returned by the event handler
  onInputChange(event) {
    console.log(event.target.value);
  }
}

export default SearchBar;
