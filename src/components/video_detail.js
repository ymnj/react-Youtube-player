import React from 'react'

const VideoDetail = ({video}) => {

  if(!video){
    return <p>"Loading..."</p>;
  }

  const videoId = video.id.videoId;
  const videoUrl = `https://www.youtube.com/embed/${videoId}`

  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe id="ytplayer" className="embed-responsive-item" type="text/html" src={videoUrl}></iframe>  
      </div>
    </div>
  )

}

export default VideoDetail;