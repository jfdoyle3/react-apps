import React, { Component } from 'react';
import Tasks from './Tasks'


class App extends Component {
  state={
    tasks:[
      {id: 1, content: 'buy beer'},
      {id: 2, content: 'play game'}
    ]
  }
  render() {
    return (
      <div className="App">
        <h1 className="center blue-text">Todo's</h1>
        <Tasks tasks={this.state.tasks} />
      </div>
    );
  }
}

export default App;
