import React, {Component} from 'react';

import VideoListItem from './video_list_item';

const VideoList = ({videos}) => {

  console.log(videos)
  const videoItems = videos.map( video => <VideoListItem video={video} key={video.etag}/>);

  return (
    <div>
      <ul>  
        {videoItems}
      </ul>
    </div>
  )
}

export default VideoList;