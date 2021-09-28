const resultTag = document.getElementById('result');

export const printOutPut = (text) => {
    resultTag.innerHTML = text
}

export const printDatesDiff = ({ years, months, days }) => {
    printOutPut(`
    Дни: ${days},
    Месяцы: ${months},
    Годы: ${years}
    `)
}