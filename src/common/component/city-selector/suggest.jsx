import React, { useEffect, useState, memo } from 'react'
import PropTypes from 'prop-types'
import './index.css'
import SuggestItem from './suggest-item'

const Suggest = memo(function Suggest(props) {
  const { searchKey = '', onSelect } = props

  const [searchResult, setSearchResult] = useState()

  useEffect(() => {
    fetch('http://localhost:80/rest/search?key=' + searchKey)
      .then(res => res.json())
      .then(data => {
        const { searchKey: key, result } = data

        if (key === searchKey) {
          setSearchResult(result)
        }
      })
  }, [])

  return (
    <div className="city-suggest">
      <ul className="city-suggest-ul">
        {searchResult
          ? searchResult.map(result => {
              return (
                <SuggestItem
                  key={result.key}
                  name={result.display}
                  onSelect={onSelect}
                />
              )
            })
          : null}
      </ul>
    </div>
  )
})

Suggest.propTypes = {}

export default Suggest
