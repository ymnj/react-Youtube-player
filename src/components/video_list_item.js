import React from 'react'

const VideoListItem = ({video, onVideoSelect}) => {

  const imageUrl = video.snippet.thumbnails.default.url;
  const videoTitle = video.snippet.title;

  return (
    <li className="list-group-item" onClick={ () => {onVideoSelect(video)} }>
      <img src={imageUrl} />
      {videoTitle}
    </li>
  )
}

export default VideoListItem;