
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YoutubeSearch from 'youtube-api-search'

import SearchBar from './components/search_bar'


const API_KEY = 'AIzaSyDZvqtWbxGr2wRdfRqYLXVy102NF2MRaGE';

class App extends Component {
  
  constructor(props) {
    super(props)

    YoutubeSearch({
      key: API_KEY,
      term: 'Yerin'
    }, (data) => console.log(data))

  }  

  render() {
    return (
      <SearchBar />
    )
  }
}

ReactDOM.render(<App />, document.getElementById('container'));