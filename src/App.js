import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import Routes from "./Routes";
import {NotificationContainer} from 'react-notifications';
import {NotificationManager} from 'react-notifications';
//import './App.css';

class App extends Component {

  constructor(props) {
      super(props);
      this.state = {}
  }
  render() {
    return( <div>
      <Routes />
      </div>)
  }
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;
