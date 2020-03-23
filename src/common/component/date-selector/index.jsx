import React from 'react'
import PropTypes from 'prop-types'
import './index.css'
import Header from '../header'
import Month from './month'
import classnames from 'classnames'
import {
  getStartOfMonth,
  getMonth
} from '../../utils/date-util'

function DateSelector(props) {
  const {show, onSelect, onBack} = props

  const months = []
  const today = Date.now()
  for (let i = 0; i < 4; i++) {
    months.push(getStartOfMonth(today,i))
  }

  return (
    <div className={classnames('date-selector',{hidden: !show})}>
      <Header title={'日期选择'} onBack={onBack}/>
      <div className="date-selector-tables">
        {months.map(startOfMonth => {
          return <Month 
                    key={getMonth(startOfMonth)}
                    startOfMonth={startOfMonth} 
                    onSelect={onSelect}/>
        })}
      </div>
    </div>
  )
}

DateSelector.propTypes = {
  show:PropTypes.bool.isRequired,
  onSelect:PropTypes.func,
  onBack:PropTypes.func.isRequired
}

export default DateSelector

