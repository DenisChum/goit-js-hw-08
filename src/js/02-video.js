import Player from '@vimeo/player';
import { throttle } from 'lodash';

    const iframe = document.querySelector('iframe');
    const player = new Player(iframe);

player.on('timeupdate', throttle(event =>
    localStorage.setItem('videoplayer-current-time', event.seconds), 600));

    player.setCurrentTime(localStorage.getItem('videoplayer-current-time')).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            break;
        default:
            break;
    }
});
