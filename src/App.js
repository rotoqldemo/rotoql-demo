import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavBar from './NavBar';
import TeamPage from './TeamPage';

// import './App.css';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <NavBar />
          <TeamPage />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
