import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import './PlayersTable.css';

const unavailableImage = 'https://www.jainsusa.com/images/store/landscape/not-available.jpg';

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
            {this.props.players.map(n => {
              return (
                <TableRow key={n.id}>
                  <TableCell><img src={n.realPlayer.imageUrl || unavailableImage} className="headshot" alt=''/></TableCell>
                  <TableCell>{n.realPlayer.fullName}</TableCell>
                  <TableCell className="uppercase">{n.eligiblePositions.join(', ')}</TableCell>
                  <TableCell>{n.isStarting ? 'Starting' : 'Benched'}</TableCell>
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

export default PlayersTable
