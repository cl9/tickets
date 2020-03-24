import React from 'react';
import {connect} from 'react-redux'
import './App.css';
import DateNav from '../common/component/date-nav'
import List from './list'
import Bottom from './bottom'

function App() {
  return (
    <div className="App">
      <DateNav/>
      <List/>
      <Bottom/>
    </div>
  );
}

export default connect(
  function mapStateToProps(state) {
    return state
  },
  function mapDispatchToProps(dispatch) {
    return { dispatch }
  }
)(App)
