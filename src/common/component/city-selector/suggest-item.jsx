import React, { memo } from 'react'
import PropTypes from 'prop-types'
import './index.css'

const SuggestItem = memo(function SuggestItem(props) {
  const { name = '', onSelect } = props

  return (
    <li className="city-suggest-li" onClick={() => onSelect(name)}>
      {name}
    </li>
  )
})

SuggestItem.propTypes = {
  name: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
}

export default SuggestItem
