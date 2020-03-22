import React, { memo } from 'react'
import PropTypes from 'prop-types'
import './index.css'

const AlphaIndex = memo(function AlphaIndex(props) {
  const { alpha, onAlphaClick } = props

  return (
    <i className="city-index-item" onClick={() => onAlphaClick(alpha)}>
      {alpha}
    </i>
  )
})

AlphaIndex.propTypes = {
  alpha: PropTypes.string.isRequired,
  onAlphaClick: PropTypes.func.isRequired
}

export default AlphaIndex
