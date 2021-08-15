import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Button, Container, Grid } from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';
import Sort from '../sort';
import Filter from '../filter';
import { getCasesAction } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../../sharing-interfaces';

const useStyles = makeStyles({

  head: {
    fontWeight: "bold"
  }
});




export default function CasesTable() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const cases = useSelector((state: State) => state.cases);

  useEffect(()=>{
    const initReq = async () =>{
      dispatch(getCasesAction());
      }
    initReq();
  },[])

  return (


    <TableContainer component={Paper} style={{marginTop: "4rem"}}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.head}>שם תיק</TableCell>
            <TableCell className={classes.head}>משימות</TableCell>
            <TableCell className={classes.head}>דיון</TableCell>
            <TableCell className={classes.head}>סטטוס</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cases.map((item: any) => (
            <TableRow key={item.Id}>
              <TableCell align="left" component="th" scope="row">
                {item.case}
              </TableCell>
              <TableCell>{item.tasks}</TableCell>

              <TableCell>{item.meeting}</TableCell>
              <TableCell>
                {item.status}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

  );
}
