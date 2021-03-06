import { DateTime } from 'https://moment.github.io/luxon/es6/luxon.js'

export default ({ from, to }) => {
    if (from > to) {
        [to, from] = [from, to]
    }

    const fromDate = DateTime.fromISO(from)
    const toDate = DateTime.fromISO(to)

    const result = toDate.diff(fromDate, ['years', 'months', 'days']).toObject()
    return result
}