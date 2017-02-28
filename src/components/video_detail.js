import React from 'react';
import axios from 'axios';



const saveToFirebase = (url, title) => {
  console.log(title);
    axios({
      method: 'post',
      url: 'https://hm-msg-forum-f02c3.firebaseio.com/messages/.json',
      data: {
        favorites: url,
        title: title
      }
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}


const VideoDetail = ({video}) => {
  if (!video) {
    return <div>Loading...</div>;
  }

  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url}></iframe>
      </div>
      <div className="details">
        <button className="btn btn-primary xcs"
          onClick={() => saveToFirebase(url, video.snippet.title)}
          >Add favorites</button>
        <div><h3>{video.snippet.title}</h3></div>
        <div>{video.snippet.description}</div>
      </div>

    </div>
  )
};

export default VideoDetail;
