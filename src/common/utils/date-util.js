import dayjs from 'dayjs'

  /**
   * 获取指定时间当前或者(当前+@param {*} increment)月份
   * @param {*} date 指定时间
   * @param {*} increment 月份增量,不传则取指定时间当月
   */
  export function getMonth(date, increment){
    return increment ? dayjs(date).add(increment,'month').month() + 1 : dayjs(date).month() + 1
  }

  /**
   * 获取指定时间当前或者(当前+@param {*} increment)月份的第一天
   * @param {*} date 指定时间
   * @param {*} increment 月份增量,不传则取指定时间当月
   */
  export function getStartOfMonth(date, increment){
    return increment ? dayjs(date).startOf('month').add(increment, 'month') :  dayjs(date).startOf('month')
  }

  /**
   * 获得当前时间的第二天
   * @param {*} date 
   */
  export function nextDay(date){
    return dayjs(date).add(1, 'day')
  }

  /**
   * 比较两个日期是否是同一个月
   * @param {*} date 
   * @param {*} otherDate 
   */
  export function isSameMonth(date,otherDate){
    return dayjs(date).isSame(otherDate, 'month')
  }
  /**
   * 获取当月开始时间前的星期占位符
   * @param {*} date 指定时间
   */
  export function getStartPlaceHolderOfMonth(date){
    return new Array(dayjs(date).day()).fill(null)
  }

  /**
   * 获取当月结束时间后的星期占位符
   * @param {*} date 指定时间
   */
  export function getEndPlaceHolderOfMonth(date){
    let endDay = dayjs(date).endOf('month')
    return new Array(6 - dayjs(endDay).day()).fill(null)
  }

  /**
   * 获取指定时间当前或者(当前+@param {*} increment)月份的所有天,返回数组
   * @param {*} date 
   * @param {*} increment 月份增量,不传则取指定时间当月
   */
  export function getMonthAllDays(date, increment){
    let startDay = this.getStartOfMonth(date, increment)
    let nextDay = startDay
    let days = []
    while(this.isSameMonth(startDay, nextDay)){
      days.push(nextDay)
      nextDay = this.nextDay(nextDay)
    }
    return days
  }

  /**
   * 获取指定时间当前或者(当前+@param {*} increment)月份的所有天,返回数组（包括前后的占位符）
   * @param {*} date 
   * @param {*} increment 月份增量,不传则取指定时间当月
   */
  export function getMonthAllDaysWithPlaceHolder(date, increment){
    let startDay = this.getStartOfMonth(date, increment)
    let nextDay = startDay
    let days = []
    while(this.isSameMonth(startDay, nextDay)){
      days.push(nextDay)
      nextDay = this.nextDay(nextDay)
    }
    days = this.getStartPlaceHolderOfMonth(startDay).concat(days).concat(this.getEndPlaceHolderOfMonth(startDay))
    return days
  }

export default {
  
}