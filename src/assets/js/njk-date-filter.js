const dayjs = require('dayjs')
var utc = require('dayjs/plugin/utc') // dependent on utc plugin
var timezone = require('dayjs/plugin/timezone')
dayjs.extend(utc)
dayjs.extend(timezone)

const defaultFormat = 'YYYY-MM-DD'

function dayjsFilter(date, format = defaultFormat) {
  return dayjs(date).tz('utc').format(format)
}

module.exports = dayjsFilter