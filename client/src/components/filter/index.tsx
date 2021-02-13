import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox, { CheckboxProps } from '@material-ui/core/Checkbox';
import { Typography } from '@material-ui/core';



export default function Filter() {
  const [state, setState] = React.useState({
    checkedA: false,
    checkedB: false,
    checkedC: false,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
      <div>
          <Typography variant="h6">אפשרויות סינון</Typography>
    <FormGroup row>
      <FormControlLabel
        control={<Checkbox checked={state.checkedA} onChange={handleChange} name="checkedA" />}
        label="כתיבה"
        />
      <FormControlLabel
        control={
            <Checkbox
            checked={state.checkedB}
            onChange={handleChange}
            name="checkedB"
            color="secondary"
            />
        }
        label="טלפון"
        />
      <FormControlLabel 
      color="secondary"
      control={<Checkbox name="checkedC" />} label="מעקב" />
    </FormGroup>
      </div>
  );
}
