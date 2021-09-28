import { sound } from './soundClick.js'

const startBtn = document.getElementById('start-btn');
const stopBtn = document.getElementById('stop-btn');
const timerDisplay = document.getElementById('timer-display');

export default () => {
    startBtn.addEventListener('click', () => {
        const userTime = document.getElementById('user-time');
        timerDisplay.innerHTML = userTime.value;
        let countDownStart = setInterval(() => {

            stopBtn.addEventListener('click', () => {
                clearInterval(countDownStart);
                sound.play();
            })

            userTime.stepDown();
            timerDisplay.innerHTML = userTime.value;

            if (userTime.value == "00:00:00") {
                clearInterval(countDownStart);
                sound.play();
            }
        }, 1000);
    })

}