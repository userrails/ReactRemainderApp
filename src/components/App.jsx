import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'; 
import { addReminder } from '../actions';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
  }

  // This tells redux is working now
  addReminder() {
    // console.log('this.state', this.state);
    // console.log('this', this);
    this.props.addReminder(this.state.text);
  }

  render() {
    return (
      <div className="App">
        <div className="title text-primary">
          Remainder Application
        </div>
        <div className="form-inline">
          <div className="form-group">
            <input className="form-control"
                   placeholder="Enter ToDo ..."
                   onChange={event => this.setState({text: event.target.value})} />
          </div>
          <button type="button"
                   className="btn btn-success"
                   onClick={() => this.addReminder()}
                   >Add Reminder</button>
        </div>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({addReminder}, dispatch);
}
export default connect(null, mapDispatchToProps)(App);

// export default App;