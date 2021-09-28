import '../node_modules/howler/src/howler.core.js';
import sound from '../sound.mp3'

export const theSound = new Howl({
    src: [sound]
});
