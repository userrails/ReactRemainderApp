import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'; 
import { addReminder, deleteReminder } from '../actions';

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

  deleteReminder(id) {
    console.log('deleting in application', id);
    console.log('this.props', this.props);
    this.props.deleteReminder(id);
  }

  renderReminders() {
    const { reminders } = this.props;
    // console.log('reminders', reminders );
    return(
      <ul className="list-group col-sm-4">
        {
          reminders.map(reminder => {
            return (
              <li key={reminder.id} className="list-group-item">
                <div className="list-item">{reminder.text}</div>
                <div 
                  className="list-item delete-button"
                  onClick={() => this.deleteReminder(reminder.id)}
                  >
                  &#x2715;
                </div>
              </li>
            )
          })
        }
      </ul>
    )
  }

  render() {
    return (
      <div className="App">
        <div className="title text-primary">
          Reminder Application
        </div>

        <div class="row">
          <div className="form-inline">
            <div className="form-group">
              <input className="form-control"
                     placeholder="Enter ToDo ..."
                     onChange={event => this.setState({text: event.target.value})} />
            </div>
            
            <div class="form-group">
              <button type="button"
                     className="btn btn-success"
                     onClick={() => this.addReminder()}
                     >Add Reminder</button>
            </div>

          </div>  
        </div>
        

        <div className="row">
          { this.renderReminders() }
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  console.log('state', state);
  return {
    reminders: state
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({addReminder, deleteReminder}, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(App);

// export default App;