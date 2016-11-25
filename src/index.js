
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YoutubeSearch from 'youtube-api-search'

import SearchBar from './components/search_bar'
import VideoList from './components/video_list'


const API_KEY = 'AIzaSyDZvqtWbxGr2wRdfRqYLXVy102NF2MRaGE';

class App extends Component {
  
  constructor(props) {
    super(props)

    this.state = {
      videos: []
    }

    YoutubeSearch({
      key: API_KEY,
      term: 'Yerin'
    }, (data) => {
      this.setState({
        videos: data
      });
    })

  }  

  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('container'));