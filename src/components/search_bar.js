import React, { Component } from 'react';

class SearchBar extends Component {
  //initialize state inside the constructor. All class based components have state.
  constructor(props) {
    super(props);
    this.state={term:''};
  }

  render() {
  //event handler for input. The event variable is returned by the event handler
    return (
        <div className="search-bar">
          <input
            value={this.state.term}
            onChange={event => this.onInputChange(event.target.value)} />
        </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
