const timerSection = document.getElementById('timer');
const dateBtn = document.getElementById('calc-btn');

const dateSection = document.getElementById('calcDate');
const timerBtn = document.getElementById('timer-btn');

export default () => {
    timerBtn.addEventListener('click', () => {
        timerSection.classList.toggle('hidden')
        dateSection.classList.add('hidden')
    })

    dateBtn.addEventListener('click', () => {
        dateSection.classList.toggle('hidden')
        timerSection.classList.add('hidden')
    })
}