import React, { useCallback, useMemo, useEffect } from 'react'
import './App.css'
import Header from '../common/component/header'
import Journey from './journey'
import DepartDate from './depart-date'
import HighSpeed from './high-speed'
import Submit from './submit'
import CitySelector from '../common/component/city-selector'
import DateSelector from '../common/component/date-selector'
import { connect } from 'react-redux'
import {
  exchangeFromTo,
  showCitySelector,
  fetchCityList,
  hideCitySelector,
  setSelectedCity,
  showDateSelector,
  hideDateSelector
} from './actions'
import { bindActionCreators } from 'redux'

function App(props) {
  const {
    from,
    to,
    isCitySelectorShow,
    isLoadingCityData,
    isDepartDateSelectorShow,
    cityData,
    departDate,
    dispatch
  } = props

  const onBack = useCallback(() => window.history.back(), [])

  const fromBacs = useMemo(() => {
    return bindActionCreators(
      {
        exchangeFromTo,
        showCitySelector
      },
      dispatch
    )
  }, [])

  const citySelectorBacs = useMemo(() => {
    return bindActionCreators(
      {
        fetchCityList,
        onBack: hideCitySelector,
        onSelect: setSelectedCity
      },
      dispatch
    )
  }, [])

  const dateBacs = useMemo(() => {
    return bindActionCreators(
      {
        showDateSelector,
      },
      dispatch
    )
  }, [])

  const dateSelectorBacs = useMemo(() => {
    return bindActionCreators(
      {
        onBack:hideDateSelector,
      },
      dispatch
    )
  }, [])

  return (
    <div>
      <div className="header-wrapper">
        <Header title="火车票" onBack={onBack} />
      </div>
      <form className="form">
        <Journey from={from} to={to} {...fromBacs} />
        <DepartDate time={departDate} {...dateBacs} />
        <HighSpeed />
        <Submit />
      </form>
      <CitySelector
        show={isCitySelectorShow}
        cityData={cityData}
        isLoading={isLoadingCityData}
        {...citySelectorBacs}
      />
      <DateSelector
        show={isDepartDateSelectorShow}
        {...dateSelectorBacs}
        />
    </div>
  )
}

export default connect(
  function mapStateToProps(state) {
    return state
  },
  function mapDispatchToProps(dispatch) {
    return { dispatch }
  }
)(App)
