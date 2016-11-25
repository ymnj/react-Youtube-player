import React from 'react'

const VideoListItem = ({video}) => {

  const imageUrl = video.snippet.thumbnails.default.url;
  const videoTitle = video.snippet.title;

  return (
    <li>
      <img src={imageUrl} />
      {videoTitle}
    </li>
  )
}

export default VideoListItem;