import React, { Component } from 'react';
import Classmates from './classmates';

class App extends Component {
  state={
    classmates: [
      {name:'jim', group: 'intermediate', time:'evening', id: 1},
      {name:'juan', group: 'advanced', time:'evening', id: 2},
      {name:'Leah', group: 'advanced', time:'evening', id: 3},
    ]
  }
  render() {
    return (
      <div className="App">
       <h1>Helllooo CareerDevs</h1>
       <p>Welcome :)</p>
       <Classmates classmates={this.classmates} />
      </div>
    );
  }
}

export default App;
