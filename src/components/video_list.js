import React, {Component} from 'react';

import VideoListItem from './video_list_item';

const VideoList = ({videos, onVideoSelect}) => {

  const videoItems = videos.map( video => {
    return <VideoListItem video={video} 
                            key={video.etag} 
                  onVideoSelect={onVideoSelect} />
  });


  return (
    <div id="video-list-wrap">
      <ul className="video-list list-group col-md-4">  
        {videoItems}
      </ul>
    </div>
  )
}

export default VideoList;