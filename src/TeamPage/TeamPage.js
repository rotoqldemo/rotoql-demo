import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NavBar from '../NavBar/NavBar';
import PlayersTable from '../PlayersTable/PlayersTable';
import { fetchTeam, fetchPlayers } from '../api';

/**
 * A view of a player's fantasay team.
 */
class TeamPage extends Component {
  /**
   * Create a new TeamPage component.
   *
   *@param {Object} props
   */
  constructor(props) {
    super(props);

    // initialize the component's state
    this.state = {
      team: {
        name: '',
        logo: ''
      },
      players: []
    };
  }

  /**
   * Render the component.
   */
  render() {
    return (
      <div>
        <NavBar logo={this.state.team.logo} title={this.state.team.name} />
        <PlayersTable players={this.state.players} />
      </div>
    );
  }

  /**
   * Fetch data when the component has been mounted.
   */
  componentDidMount() {
    // fetch the players on the team
    fetchPlayers(this.props.teamId)
      .then(players => this.setState({ players }));

    // fetch the team's details
    fetchTeam(this.props.teamId)
      .then(team => this.setState({ team }));
  }
}

TeamPage.propTypes = {
  teamId: PropTypes.string.isRequired
};

export default TeamPage;
