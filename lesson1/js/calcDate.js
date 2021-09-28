import { printOutPut, printDatesDiff } from './output.js'
import getDatesDiff from './getDatesDiff.js'
import { theSound } from './soundClick.js'

export default () => {
    const form = document.getElementById("calcDate");

    form.onsubmit = (event) => {
        event.preventDefault();

        const { firstDate, secondDate } = form.elements;

        if (!firstDate.value || !secondDate.value) {
            printOutPut('Заполните все поля');
            theSound.play();
            return;
        };

        const dateDiff = getDatesDiff({ from: firstDate.value, to: secondDate.value });

        printDatesDiff(dateDiff)
        theSound.play();
    }
}