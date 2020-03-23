import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import './index.css'
import CityList from './city-list'
import Suggest from './suggest'

function CitySelector(props) {
  const { show, cityData, onBack, onSelect, isLoading, fetchCityList } = props

  const [searchKey, setSearchKey] = useState()

  useEffect(() => {
    if (!show || isLoading || cityData) {
      return
    }

    fetchCityList()
  }, [show, isLoading, cityData, fetchCityList])

  const renderCityList = () => {
    if (isLoading) {
      return <div>loading</div>
    }

    if (cityData) {
      return <CityList sections={cityData.cityList} onSelect={onSelect} />
    }

    return <div>error</div>
  }

  const renderSearchList = () => {
    return searchKey ? (
      <Suggest searchKey={searchKey} onSelect={onSelect} />
    ) : null
  }

  return (
    <div className={classnames('city-selector', { hidden: !show })}>
      <div className="city-search">
        <div className="search-back" onClick={() => onBack()}>
          <svg width="42" height="42">
            <polyline
              points="25,13,16,21,25,29"
              stroke="#fff"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </div>
        <div className="search-input-wrapper">
          <input
            type="text"
            value={searchKey}
            className="search-input"
            placeholder="城市、车站的中文或拼音"
            onChange={e => setSearchKey(e.target.value)}
          />
        </div>
        <i className="search-clean" onClick={() => setSearchKey('')}>
          &#xf063;
        </i>
      </div>
      {renderSearchList()}
      {renderCityList()}
    </div>
  )
}

CitySelector.propTypes = {
  show: PropTypes.bool.isRequired,
  cityData: PropTypes.object,
  onBack: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  fetchCityList: PropTypes.func.isRequired
}

export default CitySelector
