import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Grid, InputLabel } from '@material-ui/core';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    // root: {
    //   '& > *': {
    //     margin: theme.spacing(1),
    //     width: '25ch',
    //   },
    // },
  }),
);

export default function Sort() {
  const classes = useStyles();
  return (
    <form noValidate autoComplete="off">
      <FormControl variant="outlined" fullWidth>
        <InputLabel htmlFor="outlined-age-native-simple">מיון לפי</InputLabel>
        <Select
          label="מיון לפי"
          inputProps={{
            name: 'sort',
            id: 'outlined-age-native-simple',
          }}
        >
          <MenuItem value="">מיון לפי</MenuItem> 
          <MenuItem  value={"תאריך"}>תאריך</MenuItem >
          <MenuItem  value={"דיון"}>דיון</MenuItem >
          <MenuItem  value={"סוג"}>סוג</MenuItem >
          <MenuItem  value={"שם תיק"}>שם תיק</MenuItem >
        </Select>
      </FormControl>
        </form>
  );
}
