import React, { Component } from 'react';
import Intro from '../Intro';
import './App.css';


class App extends Component {
  state ={
    series: []
  }

  componentDidMount(){
    const series = ['Vikings','Game of Trones']
    setTimeout(() =>{
      this.setState({
        series: series
      })
    }, 2000)
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          
          <h1 className="App-title">
            TV-Series List.
          </h1>
          <Intro message="Here you can find all of your most loved series"/>
          <p>The length of series array - {this.state.series.length}</p>
        </header>
      </div>
    );
  }
}

export default App;
