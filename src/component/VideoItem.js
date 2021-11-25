import React from "react";

const VideoItem = ({ video, onVideoClick }) => {
  const thumbmail = video.snippet.thumbnails.medium.url;
  const onVideoItemClick = () => {
    onVideoClick(video);
  };
  return (
    <div
      onClick={onVideoItemClick}
      className="flex mb-3 border border-gray-200 rounded-sm cursor-pointer"
    >
      <img
        alt={video.snippet.title}
        src={thumbmail}
        className="w-24 object-cover"
      />
      <p className="self-center text-xs ml-4 py-2 px-1">
        {video.snippet.title}
      </p>
    </div>
  );
};

export default VideoItem;
