import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import './NavBar.css';

/**
 * A demo navbar containing the name and logo of the current team
 * we are viewing. In a real app, we'd add menu actions,
 * authentication, etc.
 */
class NavBar extends Component {
  render() {
    return (
      <div>
        <AppBar position="static" color="default">
          <Toolbar>
            <IconButton color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Avatar alt={this.props.title} src={this.props.logo} className="navbar-logo" />
            <Typography variant="title" color="inherit">
              {this.props.title}
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

NavBar.propTypes = {
  title: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired
};

export default NavBar
