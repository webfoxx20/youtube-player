import React from "react";
import VideoItem from "./VideoItem";
const VideoList = ({ results, onVideoClick }) => {
  const videos = results.map((result) => {
    const { videoId } = result.id;
    return (
      <div key={videoId}>
        <VideoItem video={result} onVideoClick={onVideoClick} />
      </div>
    );
  });
  return videos;
};

export default VideoList;
// const VideoList = ({ videos, onVideoClick }) => {
//   const videolist = videos.map((video) => {
//     return (
//       <VideoItem
//         onVideoClick={onVideoClick}
//         key={video.id.videoId}
//         video={video}
//       />
//     );
//   });

//   return <div>{videolist}</div>;
// };
