import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Button, Container } from '@material-ui/core';
import { tasks } from '../../data/tasks';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';
import Sort from '../sort';
import Filter from '../filter';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  head: {
    fontWeight: "bold"
  }
});






export default function TasksTable() {
  const classes = useStyles();

  return (
    <Container maxWidth="lg">
      <Sort/>
      <Filter/>
    <TableContainer component={Paper} style={{marginTop: "6rem"}}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left" className={classes.head}>שם תיק</TableCell>
            <TableCell align="left" className={classes.head}>משימה</TableCell>
            <TableCell align="center" className={classes.head}>סוג</TableCell>
            <TableCell align="center" className={classes.head}>תאריך</TableCell>
            <TableCell align="center" className={classes.head}>דיון</TableCell>
            <TableCell align="center" className={classes.head}>עריכה</TableCell>
            <TableCell align="center" className={classes.head}>מחיקה</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tasks.map((task: any) => (
            <TableRow key={task.taskId}>
              <TableCell align="left" component="th" scope="row">
                {task.caseName}
              </TableCell>
              <TableCell align="left">{task.taskDescription}</TableCell>
              <TableCell align="center">{task.type}</TableCell>
              <TableCell align="center">{task.date}</TableCell>
              <TableCell align="center">{task.meeting}</TableCell>
              <TableCell align="center">
              <Button> 
                <EditIcon color="primary"/>
                </Button>
              </TableCell>
              <TableCell align="center">
              <Button>
                <DeleteForeverIcon color="secondary"/>
              </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Container>
  );
}
