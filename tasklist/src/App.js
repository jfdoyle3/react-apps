import React, { Component } from 'react';
import Tasks from './Tasks'


class App extends Component {
  state={
    tasks:[
      {id: 1, content: 'pseudo code'},
      {id: 2, content: 'start coding'}
    ]
  }
  render() {
    return (
      <div className="App">
        <h1 className="center blue-text">Tasks</h1>
        <Tasks tasks={this.state.tasks} />
      </div>
    );
  }
}

export default App;
