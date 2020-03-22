import React from 'react'
import PropTypes from 'prop-types'
import './index.css'

function Month(props) {
  const {
    month,
    onSelect,
  } = props

  return (
    <table className="date-table">
      <thead>
        <tr>
          <td rowSpan="7" className="table-title">
            <span>{`${month}月`}</span>
          </td>
        </tr>
      </thead>
      <tbody>
        <tr className="data-table-weeks">
          <th>周日</th>
          <th>周一</th>
          <th>周二</th>
          <th>周三</th>
          <th>周四</th>
          <th>周五</th>
          <th>周六</th>
        </tr>
      </tbody>
    </table>
  )
}

Month.propTypes = {

}

export default Month

