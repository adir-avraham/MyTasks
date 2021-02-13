import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { tasks } from '../../data/tasks';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Container, Grid, InputLabel } from '@material-ui/core';
import { Task } from '../../sharing-interfae';
import Autocomplete from '@material-ui/lab/Autocomplete';


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

export default function TaskForm() {
  const classes = useStyles();
    const d = new Date().toISOString().substring(0, 10);
  return (
    <Container maxWidth="xl">

    <form noValidate autoComplete="off">
    <Grid container spacing={3} justify="center">

        <Grid item xs={12} sm={6} md={4} lg={2}>
      <Autocomplete
      fullWidth
      id="combo-box-demo"
      options={tasks}
      getOptionLabel={(option: any) => option.caseName}
      renderInput={(params: any) => <TextField {...params} label="תיק קיים" variant="outlined" />}
    />
</Grid>
<Grid item xs={12} sm={6} md={4} lg={2}>
      <TextField fullWidth id="outlined-basic" label="תיק חדש" variant="outlined"/>
        </Grid>
<Grid item xs={12} sm={6} md={4} lg={2}>
      <TextField id="outlined-basic" label="משימה" variant="outlined" fullWidth/>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={2}>
      <FormControl variant="outlined" fullWidth>
        <InputLabel htmlFor="outlined-age-native-simple">סוג</InputLabel>
        <Select
          label="סוג"
          inputProps={{
            name: 'age',
            id: 'outlined-age-native-simple',
          }}
        >
          <MenuItem value="">בחר</MenuItem> 
          <MenuItem  value={"כתיבה"}>כתיבה</MenuItem >
          <MenuItem  value={"טלפון"}>טלפון</MenuItem >
          <MenuItem  value={"מעקב"}>מעקב</MenuItem >
        </Select>
      </FormControl>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={2}>
      <TextField
        id="date"
        label="תאריך"
        type="date"
        defaultValue={d}
        InputLabelProps={{
            shrink: true,
        }}
        variant="outlined"
        fullWidth
        />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2}>
            <TextField
        id="date"
        label="דיון"
        type="date"
        InputLabelProps={{
            shrink: true,
        }}
        variant="outlined"
        fullWidth
        />
        </Grid>
    </Grid>
    </form>
    <Grid container spacing={3} justify="center">
        <Grid item xs={12} sm={6} md={4} lg={2}>
          <Button
          fullWidth
          variant="contained"
          color="secondary"
          size="large"
          >
          שמור
        </Button>
        </Grid>
        </Grid>
    </Container>
  );
}
