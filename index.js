const ytdl = require('ytdl-core');
const ffmpeg = require('fluent-ffmpeg');
const fs = require('fs');

function downloadVideo(url, filePath) {
    return new Promise((resolve, reject) => {
        const videoStream = ytdl(url, { quality: 'highestvideo' });
        videoStream.pipe(fs.createWriteStream(filePath))
            .on('finish', resolve)
            .on('error', reject);
    });
}

function downloadAudio(url, filePath) {
    return new Promise((resolve, reject) => {
        const audioStream = ytdl(url, { quality: 'highestaudio' });
        audioStream.pipe(fs.createWriteStream(filePath))
            .on('finish', resolve)
            .on('error', reject);
    });
}

function mergeVideoAndAudio(videoPath, audioPath, outputPath) {
    return new Promise((resolve, reject) => {
        ffmpeg()
            .input(videoPath)
            .input(audioPath)
            .outputOptions('-c:v copy')
            .outputOptions('-c:a aac')
            .output(outputPath)
            .on('end', resolve)
            .on('error', reject)
            .run();
    });
}

async function downloadAndMergeVideo(url, outputFilePath) {
    try {
        const videoFilePath = 'video.mp4';
        const audioFilePath = 'audio.mp4';

        console.log('Downloading video...');
        await downloadVideo(url, videoFilePath);
        console.log('Video downloaded successfully.');

        console.log('Downloading audio...');
        await downloadAudio(url, audioFilePath);
        console.log('Audio downloaded successfully.');

        console.log('Merging video and audio...');
        await mergeVideoAndAudio(videoFilePath, audioFilePath, outputFilePath);
        console.log('Video and audio merged successfully.');

        // Cleanup temporary files
        fs.unlinkSync(videoFilePath);
        fs.unlinkSync(audioFilePath);

        console.log('Download and merge process completed.');
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

module.exports = { downloadAndMergeVideo };


/* usage example
        ========================================================================================
        downloadAndMergeVideo('https://www.youtube.com/watch?v=cQGExxX_BpA', 'merged_video.mp4');
        ========================================================================================
 */

