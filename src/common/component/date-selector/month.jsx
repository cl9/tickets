import React from 'react'
import PropTypes from 'prop-types'
import './index.css'
import {
  getYear,
  getMonth,
  getMonthAllDaysWithPlaceHolder
} from '../../utils/date-util'
import Week from './week'
import _ from 'lodash'

function Month(props) {
  const {
    startOfMonth,
    onSelect,
  } = props

  const daysOfMonth = getMonthAllDaysWithPlaceHolder(startOfMonth)
  const weeks = _.chunk(daysOfMonth, 7)

  return (
    <table className="date-table">
      <thead>
        <tr>
          <td colSpan="7">
            <span>{`${getYear(startOfMonth)}年${getMonth(startOfMonth)}月`}</span>
          </td>
        </tr>
      </thead>
      <tbody>
        <tr className="data-table-weeks">
          <th className="weekend">周日</th>
          <th>周一</th>
          <th>周二</th>
          <th>周三</th>
          <th>周四</th>
          <th>周五</th>
          <th className="weekend">周六</th>
        </tr>
        {
          weeks.map((week,i) => {
            return <Week 
                      key={i}
                      days={week}
                      onSelect={onSelect}/>
          })
        }
      </tbody>
    </table>
  )
}

Month.propTypes = {
  startOfMonth: PropTypes.object.isRequired,
  onSelect: PropTypes.func.isRequired  
}

export default Month

