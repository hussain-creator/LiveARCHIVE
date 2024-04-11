const axios = require("axios");

const publishedAfterDate = "2024-03-07T00:00:00Z";

const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UC7LzcXosEIf7q3zgoc73IQw&eventType=completed&type=video&key=AIzaSyCq3rXbJ4eZicyUKf21PiolOjgqsjhnmiU&publishedAfter=${publishedAfterDate}&maxResults=50`;
const ytTemp = "https://www.youtube.com/watch?v=";
axios
  .get(url)
  .then((response) => {
    const items = response.data.items;
    items.forEach(async (item) => {
      await downloadAndMergeVideo(
        ytTemp + item.id.videoId,
        item.snippet.title + ".mp4"
      );
    });
  })
  .catch((error) => {
    console.log(error);
  });
