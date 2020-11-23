const dayjs = require('dayjs')

const defaultFormat = 'YYYY-MM-DD'

function dayjsFilter(date, format = defaultFormat) {
  return dayjs(date).format(format)
}

module.exports = dayjsFilter