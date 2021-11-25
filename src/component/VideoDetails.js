import React, { useState, useEffect } from "react";
import BarLoader from "react-spinners/BarLoader";
// import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import YoutubeApi from "../api/YoutubeApi";
import MainVideo from "./MainVideo";
import SearchBar from "./SearchBar";
//
import VideoList from "./VideoList";

const VideoDetail = () => {
  const [results, setResult] = useState([]);
  const [selectedVideo, setSelcectVideo] = useState(null);
  const [loader, setLoader] = useState(true);
  const [err, setErr] = useState(null);

  useEffect(() => {
    onFormSubmit("Squid game");
  }, []);

  const onFormSubmit = async (term) => {
    setLoader(true);
    if (term) {
      try {
        const response = await YoutubeApi.get("/search", {
          params: {
            q: term,
          },
        });

        setResult(response.data.items);
        setSelcectVideo(response.data.items[0]);
        setLoader(false);
      } catch (err) {
        setErr(err);
      }
    } else {
      setLoader(false);
      setErr(null);
    }
  };
  console.log(err);

  const displayVideo = () => {
    if (!loader) {
      return (
        <div className="lg:grid lg:grid-cols-3 lg:gap-3 mt-10 px-3">
          <MainVideo selectedVideo={selectedVideo} />
          <div className="lg:col-start-3">
            <VideoList results={results} onVideoClick={onVideoClick} />
          </div>
        </div>
      );
    } else {
      return (
        <div className=" flex justify-center items-center text-center mt-40">
          {/* <ClimbingBoxLoader color={"#eee"} loading={loader} size={15} /> */}
          <BarLoader
            color={"#f9d71c"}
            loading={loader}
            height={4}
            width={100}
          />
        </div>
      );
    }
  };
  const showErrorMessage = () => {
    return (
      <div className=" flex flex-col justify-center items-center text-center mt-28">
        <p> Oops, something went wrong</p>
        <button
          onClick={() => {
            setErr(null);
            onFormSubmit("squid game");
          }}
          className="bg-primaryColor px-4 p-1 mt-2 rounded-sm "
        >
          Reload
        </button>
      </div>
    );
  };

  const onVideoClick = (videoid) => {
    setSelcectVideo(videoid);
  };

  return (
    <div className="px-3 h-screen">
      <SearchBar onFormSubmit={onFormSubmit} />
      {err ? showErrorMessage() : displayVideo()}
    </div>
  );
};
export default VideoDetail;
