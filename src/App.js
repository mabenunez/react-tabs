import React, { Component } from 'react';
import Tabs from './components/Molecules/tabs/Tabs';
//import colors from './constants/colors'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      tabs : [
        {title: 'Title1', content:'blabla1'},
        {title: 'Title2', content:'blabla2'},
        {title: 'Title3', content:'blabla3'},
        {title: 'Title4', content:'blabla4'},
        {title: 'Title5', content:'blabla5'},
        {title: 'Title6', content:'blabla6'},
        {title: 'Title7', content:'blabla7'},
        {title: 'Title8', content:'blabla8'},
        {title: 'Title9', content:'blabla9'}
      ]
    }
  }
  
  render () {
    return (
      <div className="App">
        <h1>React fo the win</h1>
        <Tabs changeBorderColor={this.changeBorderColor} tabs = {this.state.tabs}></Tabs>
        <div></div>
      </div>
    );
  }
  
}



export default App;
