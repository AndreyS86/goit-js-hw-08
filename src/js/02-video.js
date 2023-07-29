import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);


document.addEventListener('DOMContentLoaded', () => {
    const savedTime = localStorage.getItem('videoplayer-current-time');
    if (savedTime) {
      player.setCurrentTime(savedTime);
    }
  });

const saveTimeToLocalStorage = throttle(async () => {
    const currentTime = await player.getCurrentTime();
    localStorage.setItem('videoplayer-current-time', currentTime);
  }, 1000)

  player.on('timeupdate', () => {
    saveTimeToLocalStorage();
  });

