import React from 'react'
import PropTypes from 'prop-types'
import './index.css'
import {
    isBeforeNow,
    isWeekend,
    isToday,
    getDayOfMonth
} from '../../utils/date-util'
import classnames from 'classnames'

function Day(props) {
    const {
        day,
        onSelect
    } = props

    if (!day) {
        return <td className="null"></td>
    }

    const dayStyle = classnames(
        { disabled: isBeforeNow(day) },
        { 'weekend': isWeekend(day) })

    const dayString = isToday(day) ? '今天' : getDayOfMonth(day)

    return (
        <td className={dayStyle} onClick={() => onSelect(day)}>{dayString}</td>
    )
}

Day.propTypes = {
    day: PropTypes.object,
    onSelect: PropTypes.func.isRequired
}

export default Day

