
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YoutubeSearch from 'youtube-api-search'


//Components
import SearchBar from './components/search_bar'
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'

//Stylesheets
require('../style/style.scss')

const API_KEY = 'AIzaSyDZvqtWbxGr2wRdfRqYLXVy102NF2MRaGE';

class App extends Component {
  
  constructor(props) {
    super(props)

    this.state = {
      videos: [],
      selectedVideo: null
    }

    this.onVideoSearch('Yerin');

  }  //END constructor


  onVideoSelect = (video) => {
    this.setState({
      selectedVideo: video
    });
  }

  onVideoSearch = (term) => {
    YoutubeSearch({
      key: API_KEY,
      term: term
    }, (data) => {
      this.setState({
        videos: data,
        selectedVideo: data[0]
      });
    })
  }

  render() {
    return (
      <div className="container">
        <SearchBar onVideoSearch={this.onVideoSearch}/>
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('container'));