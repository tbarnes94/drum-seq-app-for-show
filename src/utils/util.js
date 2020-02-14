
/* SOUNDS */
import mp3File0 from '../audio/yoshi.mp3';
import mp3File1 from '../audio/bass_drum.mp3';
import mp3File2 from '../audio/hi_hat_open.mp3';
import mp3File3 from '../audio/hi_hat_closed.mp3';
import mp3File4 from '../audio/snare.mp3';
import mp3File5 from '../audio/clap.mp3';
import mp3File6 from '../audio/mid_floor_tom.mp3';
import mp3File7 from '../audio/low_floor_tom.mp3';

const soundObjs = [
  mp3File0,
  mp3File1,
  mp3File2,
  mp3File3,
  mp3File4,
  mp3File5,
  mp3File6,
  mp3File7,
];
export const soundNames = [];
export const sounds = [];
for (let i = 0; i < soundObjs.length; i += 1) {
  soundNames.push(soundObjs[i].split('/')[3].split('.')[0]);
  sounds.push(new Audio(soundObjs[i]))
}

export const convertFileNameToRowName = (fn) => {
    while (fn.search("_") !== -1) {
        fn = fn.replace("_", " ");
    }
    return fn.toUpperCase();
}