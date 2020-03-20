import React,{useCallback, useMemo, useEffect} from 'react';
import './App.css';
import Header from '../common/component/header'
import Journey from './journey'
import DepartDate from './depart-date'
import HighSpeed from './high-speed'
import Submit from './submit'
import CitySelector from '../common/component/city-selector'
import { connect } from 'react-redux'
import {
    exchangeFromTo,
    showCitySelector,
    fetchCityList,
    hideCitySelector,
    setSelectedCity
} from './actions'
import { bindActionCreators } from 'redux';

function App(props) {
  const {
    from,
    to,
    isCitySelectorShow,
    isLoadingCityData,
    cityData,
    departDate,
    dispatch
  } = props

  const onBack = useCallback(
    () => window.history.back()
    ,[])

  const fromBacs = useMemo(
    () => {
     return bindActionCreators(
        {
          exchangeFromTo,
          showCitySelector
        },
        dispatch
      )
    }
  ,[])

  const citySelectorBacs = useMemo(
    () => {
     return bindActionCreators(
        {
          fetchCityList,
          onBack:hideCitySelector,
          onSelect:setSelectedCity
        },
        dispatch
      )
    }
  ,[])

  return (
    <div>
      <div className="header-wrapper">
        <Header title='火车票' onBack={onBack}/>
      </div>
      <form className='form'>
        <Journey 
            from={from} 
            to={to} 
            {...fromBacs}/>
        <DepartDate time={departDate} onClick={()=>{}}/>
        <HighSpeed/>
        <Submit/>
      </form>
      <CitySelector 
          show={isCitySelectorShow}
          cityData={cityData} 
          isLoading={isLoadingCityData}
          {...citySelectorBacs}/>
    </div>
  );
}

export default connect(
  function mapStateToProps(state){
    return state
  },
  function mapDispatchToProps(dispatch){
    return { dispatch }
  }
)(App);
