import React,{useMemo} from 'react'
import PropTypes from 'prop-types'
import './index.css'
import dayjs from 'dayjs'

function DepartDate(props) {
  const {
    time,
    onClick,
  } = props

  const formatTime = useMemo(() => {
    return dayjs(time).format('MM-DD')
  },[])

  return (
    <div className="depart-date" onClick={onClick}>
      <input type="hidden" name="date" value={formatTime}/>
      {formatTime}
    </div>
  )
}

DepartDate.propTypes = {

}

export default DepartDate

