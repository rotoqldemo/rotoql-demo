import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  img: {
    height: '40px',
    borderRadius: '50%'
  },
  imgCell: {
    width: '2rem'
  }
});

let id = 0;
function createData(image, name, position, status) {
  id += 1;
  return { id, image, name, position, status };
}

const data = [
  createData('https://s.hdnux.com/photos/71/12/20/14984254/5/920x920.jpg', 'Tom Brady', 'QB', 'Starting'),
  createData('https://s.hdnux.com/photos/71/12/20/14984254/5/920x920.jpg', 'Tom Brady', 'QB', 'Starting'),
  createData('https://s.hdnux.com/photos/71/12/20/14984254/5/920x920.jpg', 'Tom Brady', 'QB', 'Starting'),
  createData('https://s.hdnux.com/photos/71/12/20/14984254/5/920x920.jpg', 'Tom Brady', 'QB', 'Starting'),
  createData('https://s.hdnux.com/photos/71/12/20/14984254/5/920x920.jpg', 'Tom Brady', 'QB, RB', 'Starting'),
  createData('https://s.hdnux.com/photos/71/12/20/14984254/5/920x920.jpg', 'Tom Brady', 'QB', 'Benched'),
  createData('https://s.hdnux.com/photos/71/12/20/14984254/5/920x920.jpg', 'Tom Brady', 'QB', 'Benched'),
];

function SimpleTable(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Position</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(n => {
            return (
              <TableRow key={n.id}>
                <TableCell className={classes.imgCell}><img src={n.image} className={classes.img} alt=''/></TableCell>
                <TableCell>{n.name}</TableCell>
                <TableCell>{n.position}</TableCell>
                <TableCell>{n.status}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);
