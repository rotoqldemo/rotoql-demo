import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import './PlayersTable.css';

const UNAVAILABLE_IMAGE = 'https://www.jainsusa.com/images/store/landscape/not-available.jpg';

/**
 * A table that renders a list of players.
 *
 * For the demo it's just a boring static table, without
 * any actions. The API seems to expose fun things like
 * jersey numbers, nick-names, real team, college, etc.,
 * which would make for a nice display, but these values
 * don't look populated at the moment.
 */
class PlayersTable extends Component {
  /**
   * Create a new PlayersTable component.
   *
   *@param {Object} props
   */
  constructor(props) {
    super(props);

    this.state = {
      players: []
    }
  }

  /**
   * To keep to the rule of immutable props, we create
   * a new players array before modifiying it.
   */
  componentWillReceiveProps(props) {
    this.setState({
      players: props.players.slice()
        .sort((player1, player2) => this.compareByStatus(player1, player2))
    });
  }

  /**
   * Compare two players by their status. The current status is
   * boolean, either the player is starting or he is isn't.
   */
  compareByStatus(player1, player2) {
    return player1.isStarting === player2.isStarting ? 0 : player1.isStarting ? -1 : 1;
  }

  /**
   * Render the component.
   */
  render() {
    return (
      <div className="players-table">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Position</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.players.map(player => {
              return (
                <TableRow key={player.id}>
                  <TableCell><img src={player.realPlayer.imageUrl || UNAVAILABLE_IMAGE} className="headshot" alt=''/></TableCell>
                  <TableCell>{player.realPlayer.fullName}</TableCell>
                  <TableCell className="uppercase">{player.eligiblePositions.join(', ')}</TableCell>
                  <TableCell>{player.isStarting ? 'Starting' : 'Benched'}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    );
  }
}

PlayersTable.propTypes = {
  players: PropTypes.array.isRequired
};

export default PlayersTable;
