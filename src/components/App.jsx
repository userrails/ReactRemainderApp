import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="title">
          Remainder Application
        </div>
        <div className="form-inline">
          <div className="form-group">
            <input className="form-control" placeholder="Enter ToDo ..." />
          </div>
          <button type="button" class="btn btn-success">Add Remainder</button>
        </div>
      </div>
    )
  }
}

export default App;

 