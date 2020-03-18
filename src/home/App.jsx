import React,{useCallback, useMemo} from 'react';
import './App.css';
import Header from '../common/component/header'
import Journey from './journey'
import DepartDate from './depart-date'
import HighSpeed from './high-speed'
import Submit from './submit'
import { connect } from 'react-redux'
import {
    exchangeFromTo,
    showCitySelector,
} from './actions'
import { bindActionCreators } from 'redux';

function App(props) {
  const {
    from,
    to,
    dispatch
  } = props

  const onBack = useCallback(
    () => window.history.back()
    ,[])

  const dispatchActionCreators = useMemo(
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

  return (
    <div>
      <div className="header-wrapper">
        <Header title='火车票' onBack={onBack}/>
      </div>
      <form className='form'>
        <Journey 
            from={from} 
            to={to} 
            {...dispatchActionCreators}/>
        <DepartDate/>
        <HighSpeed/>
        <Submit/>
      </form>
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
