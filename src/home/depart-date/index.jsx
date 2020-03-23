import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import './index.css'
import dayjs from 'dayjs'
import {
  formatDayStr
} from '../../common/utils/date-util'

function DepartDate(props) {
  const { time, showDateSelector } = props

  const formatTime = useMemo(() => {
    return dayjs(time).format('MM-DD')
  }, [time])

  const formatWeek = useMemo(() => {
    return formatDayStr(time)
  }, [time])

  return (
    <div className="depart-date" onClick={showDateSelector}>
      <input type="hidden" name="date" value={formatTime} />
      {formatTime}
      <span className="depart-week">{formatWeek}</span>
    </div>
  )
}

DepartDate.propTypes = {
  time: PropTypes.object.isRequired,
  showDateSelector: PropTypes.func.isRequired
}

export default DepartDate
