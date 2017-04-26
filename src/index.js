
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YoutubeSearch from 'youtube-api-search'
import YoutubeVideo from '../node_modules/youtube-api-videos/index';


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
      selectedVideo: null,
      videoDetails: ""
    }

    this.onVideoSearch('Yerin');

  }  //END constructor


  onVideoSelect = (video) => {
    (() => {
      const videoId = this.state.selectedVideo.id.videoId;
      
      YoutubeVideo({
        key: API_KEY,
        id: videoId
      }, (data) => {
        this.setState({
          selectedVideo: video,
          selectedVideoDetails: data[0].snippet.description
        })
      });
    })();
  };

  onVideoSearch = (term) => {
    YoutubeSearch({
      key: API_KEY,
      term: term
    }, (data) => {
      console.log(data);
      this.setState({
        videos: data,
        selectedVideo: data[0]
      });

      const videoId = this.state.selectedVideo.id.videoId;

      //This IIFE will make a VIDEO youtube api call in order to retrieve a full description
      (() => {
        YoutubeVideo({
          key: API_KEY,
          id: videoId
        }, (data) => {
          console.log(data);
          this.setState({
            selectedVideoDetails: data[0].snippet.description
          })
        });
      })(); //END of IIFE
    }); // END of on VideoSearch
  }

  render() {
    return (
      <div className="container">
        <SearchBar onVideoSearch={this.onVideoSearch}/>
        <VideoDetail video={this.state.selectedVideo} selectedVideoDetails={this.state.selectedVideoDetails}/>
        <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect}/>
      </div>
    )
  };
}

ReactDOM.render(<App />, document.getElementById('container'));