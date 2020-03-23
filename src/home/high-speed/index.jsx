import React from 'react'
import PropTypes from 'prop-types'
import './index.css'
import classnames from 'classnames'

function HighSpeed(props) {
  const {
    highSpeed,
    toggle
  } = props

  const trackStyle = classnames('high-speed-track',{
    checked: highSpeed
  })

  const handleStyle = classnames('high-speed-handle',{
    checked: highSpeed
  })

  return (
    <div className="high-speed">
      <span className="high-speed-lable">只看高铁/动车</span>
      <div className="high-speed-switch" onClick={() => toggle()}>
        <input type="hidden" name="highSpeed" value={highSpeed}/>
        <div className={trackStyle}>
            <span className={handleStyle}></span>
        </div>
      </div>
    </div>
  )
}

HighSpeed.propTypes = {
  highSpeed: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired
}

export default HighSpeed

