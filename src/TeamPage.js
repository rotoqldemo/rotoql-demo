import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import NavBar from './NavBar';

import PlayersTable from './PlayersTable';

/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */
class TeamPage extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Grid container spacing={44}>
          <PlayersTable />
        </Grid>
      </div>
    );
  }
}

export default TeamPage;
