# YouTube Video Downloader and Merger

This repository contains a Node.js script that allows you to download a YouTube video and its corresponding audio, and merge them into a single video file.

## Prerequisites

Before using this script, make sure you have the following dependencies installed:

- [ytdl-core](https://www.npmjs.com/package/ytdl-core): A library for downloading YouTube videos.
- [fluent-ffmpeg](https://www.npmjs.com/package/fluent-ffmpeg): A library for manipulating audio and video files.
- [fs](https://nodejs.org/api/fs.html): A built-in Node.js module for interacting with the file system.

You can install these dependencies by running the following command:

```
npm install ytdl-core fluent-ffmpeg fs
```

## Usage

To download and merge a YouTube video, follow these steps:

1. Import the `downloadAndMergeVideo` function from the script:

   ```javascript
   const { downloadAndMergeVideo } = require('./youtube-downloader.js');
   ```

2. Call the `downloadAndMergeVideo` function, providing the YouTube video URL and the desired output file path:

   ```javascript
   downloadAndMergeVideo('https://www.youtube.com/watch?v=cQGExxX_BpA', 'merged_video.mp4');
   ```

3. Run your script:

   ```bash
   node your-script.js
   ```

The script will download the video and audio files. However, please note that there might be occasional issues with merging the audio and video using the `fluent-ffmpeg` library. From a developer perspective, it is important to address these potential problems in order to combine the videos and their corresponding audio correctly. You may need to investigate and troubleshoot the `fluent-ffmpeg` library or consider using an alternative library that provides reliable merging capabilities.

## Developer Perspective

As a developer, it is crucial to ensure that the merging process of the video and audio files is seamless and reliable. If you encounter any issues with the `fluent-ffmpeg` library, it is recommended to take the following steps:

1. Verify that the video and audio files are in a compatible format and meet the requirements of the `fluent-ffmpeg` library.
2. Consider exploring alternative libraries or frameworks that specialize in video/audio manipulation and have a more robust merging functionality.

By addressing these considerations and ensuring the stability of the merging process, you can create a reliable YouTube video downloader and merger.

Good luck ALI 😊

## Example

```javascript
const { downloadAndMergeVideo } = require('./youtube-downloader.js');

async function main() {
  try {
    console.log('Downloading and merging video...');
    await downloadAndMergeVideo('https://www.youtube.com/watch?v=cQGExxX_BpA', 'merged_video.mp4');
    console.log('Video downloaded and merged successfully.');
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

main();
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
