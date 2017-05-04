import React from 'react';
import YoutubeVideo from '../../node_modules/youtube-api-videos/index';


const VideoDetail = ({video, selectedVideoDetails}) => {

  if(!video){
    return <p></p>;
  }

  const videoId = video.id.videoId;
  const videoUrl = `https://www.youtube.com/embed/${videoId}`

  //Date
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let uploadDate = new Date(video.snippet.publishedAt)
      uploadDate = `${uploadDate.getDate()} ${months[uploadDate.getMonth()]} ${uploadDate.getFullYear()}`
  
  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe id="ytplayer" className="embed-responsive-item" type="text/html" src={videoUrl} allowFullScreen></iframe>  
      </div>
      <div className="media-body panel">
        <p className="media-heading">{video.snippet.title}</p>
        <p>channel: {video.snippet.channelTitle}</p>
        <p>Published on {uploadDate}</p>
        <p className="videoDescription">{selectedVideoDetails}</p>
      </div>
    </div>
  )

}

export default VideoDetail;