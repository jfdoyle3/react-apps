import React, { Component } from 'react';
import Students from './Students';

class App extends Component {
  state={
    students: [
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
       <Students students={this.state.students} />
      </div>
    );
  }
}

export default App;
