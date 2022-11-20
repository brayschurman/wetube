import fs from 'fs';
import ytdl from 'ytdl-core';

const youp3 = async (videoUrl: string, songName: string) => {
    try {
        if (!songName) {
            songName = 'song'
        }

        const mp3File = ytdl(videoUrl, {
            filter: format => format.audioQuality === 'AUDIO_QUALITY_MEDIUM'
        });

        console.log(mp3File);
            // .pipe(fs.createWriteStream(`${songName}.mp3`))

    } catch (error) {

        console.error('Error: ', error);

    }
};

export default youp3;
