import React from 'react'
import PropTypes from 'prop-types'
import './index.css'
import Day from './day'

function Week(props) {
    const {
        days,
        onSelect
    } = props

    return (
        <tr className="date-table-days">
            {days.map((day, i) => {
                return <Day
                        key={i}
                        day={day}
                        onSelect={onSelect}/>
            })}
        </tr>
    )
}

Week.propTypes = {
    days: PropTypes.array.isRequired,
    onSelect: PropTypes.func.isRequired
}

export default Week

