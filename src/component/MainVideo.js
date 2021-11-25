import React from "react";

const MainVideo = ({ selectedVideo }) => {
  console.log(selectedVideo);

  return (
    <div className="lg:col-span-2">
      <iframe
        title="video player"
        className="w-full h-80"
        src={`https://www.youtube.com/embed/${selectedVideo.id.videoId}`}
      ></iframe>
      <div className="border border-gray-200 rounded-sm cursor-pointer px-6 py-6 mb-4">
        <h4 className="text-lg leading-9">{selectedVideo.snippet.title}</h4>
        <p>{selectedVideo.snippet.description}</p>
      </div>
    </div>
  );
};

export default MainVideo;
