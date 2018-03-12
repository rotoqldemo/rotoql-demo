import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import TeamPage from './TeamPage/TeamPage';
import './App.css';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#010E37'
    }
  }
});

class App extends Component {
  /**
   * Render the component.
   */
  render() {
    // For our demo, we don't have any routing set up, so
    // we'll simply hardcode a specific team's Id so
    // we can render the team's page
    return (
      <MuiThemeProvider theme={theme}>
        <TeamPage teamId="118f812b-6505-4d01-8d62-4d9aab7592d4" />
      </MuiThemeProvider>
    );
  }
}

export default App;
