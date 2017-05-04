
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YoutubeSearch from 'youtube-api-search'
import YoutubeVideo from '../node_modules/youtube-api-videos/index';

import {API_KEY} from './config.js'

//Components
import SearchBar from './components/search_bar'
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'

//Stylesheets
require('../style/style.scss')

class App extends Component {
  
  constructor(props) {
    super(props)

    this.state = {
      videos: [],
      selectedVideo: null,
      videoDetails: "",
      show: false
    }

    //this.onVideoSearch('Yerin');

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
      this.setState({
        videos: data,
        selectedVideo: data[0],
        show: true
      });

      const videoId = this.state.selectedVideo.id.videoId;

      //This IIFE will make a VIDEO youtube api call in order to retrieve a full description
      (() => {
        YoutubeVideo({
          key: API_KEY,
          id: videoId
        }, (data) => {
          this.setState({
            selectedVideoDetails: data[0].snippet.description
          })
        });
      })(); //END of IIFE
    }); // END of on VideoSearch
  }

  render() {

    let animate = this.state.show ? 'showDiv' : 'hideDiv';


    return (
      <div className={`container ${animate}`}>
        <div className="header">
          <h1>React Youtube</h1>
        </div>
        <SearchBar show={animate} onVideoSearch={this.onVideoSearch}/>
        <div className={`fadewrap ${animate}`}>
          <VideoDetail video={this.state.selectedVideo} selectedVideoDetails={this.state.selectedVideoDetails}/>
          <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect}/>
        </div>
      </div>
    )
  };
}

ReactDOM.render(<App />, document.getElementById('container'));