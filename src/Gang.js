import React, { Component } from 'react';
import './App.css';

class Gang extends Component {
  render() {
    return (
      <div className="App">
        <h1>Shahzad's Boys</h1>
        <p>These are all of Shahzad's Boys</p>
        <ul className="boysList">
          <li>Spencer</li>
          <li>Justin</li>
          <li>Jaime</li>
          <li>Tom</li>
          <li>VP</li>
          <li>Rey</li>
        </ul>
      </div>
    );
  }
}

export default Gang;
