import React, { useCallback, useMemo } from 'react'
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
  hideDateSelector,
  setDepartDate,
  toggleHighSpeed
} from './actions'
import { bindActionCreators } from 'redux'
import {
  isBeforeNow
} from '../common/utils/date-util'

function App(props) {
  const {
    from,
    to,
    isCitySelectorShow,
    isLoadingCityData,
    isDepartDateSelectorShow,
    cityData,
    departDate,
    highSpeed,
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
  }, [dispatch])

  const citySelectorBacs = useMemo(() => {
    return bindActionCreators(
      {
        fetchCityList,
        onBack: hideCitySelector,
        onSelect: setSelectedCity
      },
      dispatch
    )
  }, [dispatch])

  const dateBacs = useMemo(() => {
    return bindActionCreators(
      {
        showDateSelector,
      },
      dispatch
    )
  }, [dispatch])

  const dateSelectorBacs = useMemo(() => {
    return bindActionCreators(
      {
        onBack:hideDateSelector
      },
      dispatch
    )
  }, [dispatch])

  const onDateSelect = useCallback(day => {
    if(!day || isBeforeNow(day)){
      return 
    }

    dispatch(setDepartDate(day))
    dispatch(hideDateSelector())
  },[dispatch])

  const highSpeedBacs = useMemo(() => {
    return bindActionCreators(
      {
        toggle:toggleHighSpeed
      },
      dispatch
    )
  }, [dispatch])

  return (
    <div>
      <div className="header-wrapper">
        <Header title="火车票" onBack={onBack} />
      </div>
      <form action="query.html" className="form">
        <Journey from={from} to={to} {...fromBacs} />
        <DepartDate time={departDate} {...dateBacs} />
        <HighSpeed highSpeed={highSpeed} {...highSpeedBacs}/>
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
        onSelect={onDateSelect}
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
