import React, { Component } from 'react';
import Classmates from './classmates';

class App extends Component {
  render() {
    return (
      <div className="App">
       <h1>Helllooo CareerDevs</h1>
       <p>Welcome :)</p>
       <Classmates name="Jim" group="Intermediate" class="Evening" />
      </div>
    );
  }
}

export default App;
