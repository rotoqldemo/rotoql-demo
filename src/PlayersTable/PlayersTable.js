import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import './PlayersTable.css';

const unavailableImage = 'https://www.jainsusa.com/images/store/landscape/not-available.jpg';

/**
 * A table that renders a list of players.
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

// SimpleTable.propTypes = {
  // classes: PropTypes.object.isRequired,
  // players: PropTypes.array.isRequired,
// };

export default PlayersTable
