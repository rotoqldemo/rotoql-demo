import React, { Component } from 'react';
import TeamPage from './TeamPage/TeamPage';

import './App.css';

class App extends Component {
  render() {
    return (
      // For our demo, we don't have any routing set up, so
      // we'll simply hardcode a specific team's Id so
      // we can render the team's page
      <TeamPage teamId="118f812b-6505-4d01-8d62-4d9aab7592d4" />
    );
  }
}

export default App;
