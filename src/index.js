import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';
//Youtube API key for video access
const API_KEY = 'AIzaSyB7Y3CfpSS1bsKDKMUiAOteQWIJEvOcdhY';

// Create a component that produces HTML
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
