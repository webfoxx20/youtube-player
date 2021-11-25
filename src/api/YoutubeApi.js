import axios from "axios";

const KEY = "AIzaSyA0f4kqojUoZQz60iEqHpz6Klmki8uNJZY";
export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    // type: "video",
    key: KEY,
  },
});
