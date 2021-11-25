import React from "react";
// import SearchBar from "./SearchBar";
// import YoutubeApi from "../api/YoutubeApi";
// import VideoList from "./VideoList";
import VideoDetail from "./VideoDetails";

const App = () => {
  return (
    <div className="container mx-auto pt-8">
      <VideoDetail />
    </div>
  );
};

export default App;
// class App extends React.Component {
//   state = {
//     videos: [],
//     SelectedVideo: null,
//   };

//   componentDidMount() {
//     this.onFormSubmit("chelsea");
//   }
//   onFormSubmit = async (term) => {
//     try {
//       const response = await YoutubeApi.get("/search", {
//         params: {
//           q: term,
//         },
//       });
//       this.setState({
//         videos: response.data.items,
//         SelectedVideo: response.data.items[0],
//       });
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   onVideoClick = (video) => {
//     this.setState({ SelectedVideo: video });
//   };

//   render() {
//     return (
//       <div className="container mx-auto pt-8>">
//         <SearchBar onFormSubmit={this.onFormSubmit} />
//         <div className="grid grid-cols-3 gap-3 mt-10">
//           <div className="col-span-2">
//             <VideoDetail video={this.state.SelectedVideo} />
//           </div>
//           <div className="col-start-3">
//             <VideoList
//               onVideoClick={this.onVideoClick}
//               videos={this.state.videos}
//             />
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
