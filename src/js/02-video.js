
 
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

// Сoздаем ключ для хранилища
const STORAGE_KEY = "videoplayer-current-time"; 

const onPlay = function ({ seconds }) {
    // делает новую запись в хранилище
    localStorage.setItem(STORAGE_KEY, seconds);
};
// console.log(onPlay);
player.on('timeupdate', throttle(onPlay, 1000)); 
const time = localStorage.getItem(STORAGE_KEY);
if (time) {
    player.setCurrentTime(time);
}
// возвращает из хранилища значение с ключом STORAGE_KEY

  

