import React, { Component } from 'react';
import PlayersTable from './PlayersTable';

/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */
class TeamPage extends Component {
  render() {
    return (
      <div>
        <h1>The team's name</h1>
        <PlayersTable />
      </div>
    );
  }
}

export default TeamPage;
