import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import './index.css'
import dayjs from 'dayjs'
import dayOfYear from 'dayjs/plugin/dayOfYear'
dayjs.extend(dayOfYear)

function DepartDate(props) {
  const { time, showDateSelector } = props

  const formatTime = useMemo(() => {
    return dayjs(time).format('MM-DD')
  }, [])

  const formatWeek = useMemo(() => {
    let dayDur = dayjs(Date.now()).dayOfYear() - dayjs(time).dayOfYear()
    console.log('dayDur' + dayDur)
    if (dayDur >= 0 && dayDur <= 2) {
      // 计算今天明天后天
      return ['今天', '明天', '后天'][dayDur]
    }
    return '周' + ['日', '一', '二', '三', '四', '五', '六'][dayjs(time).day()]
  })

  return (
    <div className="depart-date" onClick={showDateSelector}>
      <input type="hidden" name="date" value={formatTime} />
      {formatTime}
      <span className="depart-week">{formatWeek}</span>
    </div>
  )
}

DepartDate.propTypes = {}

export default DepartDate
