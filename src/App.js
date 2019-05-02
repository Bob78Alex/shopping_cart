import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navbar';
import Counters from './components/counters';

class App extends Component {
  
  render() {

  return (
   
   <main className="container">
   <NavBar />
   
   <Counters />
   </main>
  );
}

}
export default App;
