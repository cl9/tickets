import React from 'react';
import './App.css';
import Header from '../common/component/Header'
import Journey from './Journey'
import DepartDate from './DepartDate'
import HighSpeed from './HighSpeed'
import Submit from './Submit'

function App() {
  return (
    <div className="App">
      <Header/>
      <Journey/>
      <DepartDate/>
      <HighSpeed/>
      <Submit/>
    </div>
  );
}

export default App;
