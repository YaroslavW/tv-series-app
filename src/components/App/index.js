import React, { Component } from 'react';
import Intro from '../Intro';
import './App.css';
import 'whatwg-fetch';

class App extends Component {
  state ={
    series: []
  }

  componentDidMount(){
    fetch('http://api.tvmaze.com/search/shows?q=girls')
      .then(response => response.json())
      .then(json => this.setState({ series: json}))
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
