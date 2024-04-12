const axios = require("axios");

const publishedAfterDate = "2024-03-07T00:00:00Z";
let pageToken = "";
const ytTemp = "https://www.youtube.com/watch?v=";

const fetchVideos = async () => {
  try {
    while (true) {
      const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UC7LzcXosEIf7q3zgoc73IQw&eventType=completed&type=video&key=AIzaSyCq3rXbJ4eZicyUKf21PiolOjgqsjhnmiU&publishedAfter=${publishedAfterDate}&maxResults=50${
        pageToken ? `&pageToken=${pageToken}` : ""
      }`;
      const response = await axios.get(url);
      const data = response.data;
      console.log(data);
      const items = data.items;
      console.log(items);
      items.forEach(async (item) => {
        await downloadAndMergeVideo(
          ytTemp + item.id.videoId,
          item.snippet.title + ".mp4"
        );
      });

      pageToken = data.nextPageToken;
      if (!pageToken) {
        break;
      }
    }
  } catch (error) {
    console.log(error);
  }
};

fetchVideos();
