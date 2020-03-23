import dayjs from 'dayjs'

/**
 * 格式化指定时间，例如格式化为今天，明天，后天，周一到日
 * @param {*} date 
 */
export function formatDayStr(date){
  // 判断是否和今天是同一月，同一月才格式化为今明后
  if(dayjs(date).month() === dayjs().month()){
    // 只能选择以后的日期，不能选择之前的日期
    let dayDur = dayjs(date).date() - dayjs().date()
    if (dayDur >= 0 && dayDur <= 2) {
      // 计算今天明天后天
      return ['今天', '明天', '后天'][dayDur]
    }
  }
  return '周' + ['日', '一', '二', '三', '四', '五', '六'][dayjs(date).day()]
}

/**
 * 获取指定时间的日
 * @param {*} date 指定时间
 */
export function getDayOfMonth(date){
  return dayjs(date).date()
}

/**
 * 判断指定时间是否是今天
 * @param {*} date 指定时间
 */
export function isToday(date){
  return dayjs(dayjs().format('YYYY-MM-DD')).isSame(dayjs(dayjs(date).format('YYYY-MM-DD')))
}

/**
 * 判断指定时间是否是周末
 * @param {*} date 指定时间
 */
export function isWeekend(date){
  const day = dayjs(date).day()
  return day === 0 || day === 6
}

/**
 * 判断指定时间是否早于今天
 * @param {*} date 指定时间
 */
export function isBeforeNow(date){
  return dayjs(dayjs(date).format('YYYY-MM-DD')).isBefore(dayjs(dayjs().format('YYYY-MM-DD')))
}

/**
 * 获取指定时间年份
 * @param {*} date 指定时间
 */
export function getYear(date) {
  return dayjs(date).year()
}

/**
 * 获取指定时间当前或者(当前+@param {*} increment)月份
 * @param {*} date 指定时间
 * @param {*} increment 月份增量,不传则取指定时间当月
 */
export function getMonth(date, increment) {
  return increment ? dayjs(date).add(increment, 'month').month() + 1 : dayjs(date).month() + 1
}

/**
 * 获取指定时间当前或者(当前+@param {*} increment)月份的第一天
 * @param {*} date 指定时间
 * @param {*} increment 月份增量,不传则取指定时间当月
 */
export function getStartOfMonth(date, increment) {
  return increment ? dayjs(date).startOf('month').add(increment, 'month') : dayjs(date).startOf('month')
}

/**
 * 获得当前时间的第二天
 * @param {*} date 
 */
export function getNextDay(date) {
  return dayjs(date).add(1, 'day')
}

/**
 * 比较两个日期是否是同一个月
 * @param {*} date 
 * @param {*} otherDate 
 */
export function isSameMonth(date, otherDate) {
  return dayjs(date).isSame(otherDate, 'month')
}
/**
 * 获取当月开始时间前的星期占位符
 * @param {*} date 指定时间
 */
export function getStartPlaceHolderOfMonth(date) {
  return new Array(dayjs(date).day()).fill(null)
}

/**
 * 获取当月结束时间后的星期占位符
 * @param {*} date 指定时间
 */
export function getEndPlaceHolderOfMonth(date) {
  let endDay = dayjs(date).endOf('month')
  return new Array(6 - dayjs(endDay).day()).fill(null)
}

/**
 * 获取指定时间当前或者(当前+@param {*} increment)月份的所有天,返回数组
 * @param {*} date 
 * @param {*} increment 月份增量,不传则取指定时间当月
 */
export function getMonthAllDays(date, increment) {
  let startDay = getStartOfMonth(date, increment)
  let nextDay = startDay
  let days = []
  while (isSameMonth(startDay, nextDay)) {
    days.push(nextDay)
    nextDay = getNextDay(nextDay)
  }
  return days
}

/**
 * 获取指定时间当前或者(当前+@param {*} increment)月份的所有天,返回数组（包括前后的占位符）
 * @param {*} date 
 * @param {*} increment 月份增量,不传则取指定时间当月
 */
export function getMonthAllDaysWithPlaceHolder(date, increment) {
  let startDay = getStartOfMonth(date, increment)
  let nextDay = startDay
  let days = []
  while (isSameMonth(startDay, nextDay)) {
    days.push(nextDay)
    nextDay = getNextDay(nextDay)
  }
  days = getStartPlaceHolderOfMonth(startDay).concat(days).concat(getEndPlaceHolderOfMonth(startDay))
  return days
}

export default {

}