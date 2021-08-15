import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Grid } from '@material-ui/core';

export default function AddCase() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        הוספת תיק חדש
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">הוספת תיק חדש</DialogTitle>
        <DialogContent>

        <div className="container my-2">
     

          <div className="row justify-content-center g-3">            
            <div className="col-md-10">
            <p>שם תיק</p>
            <TextField 
              id="outlined-basic" 
              type="text"
              fullWidth
              variant="outlined" 
              size="small"
            />
            </div>
          
          <div className="col-md-10">
            <p>משימות</p>
            <TextField 
              id="outlined-basic" 
             
              type="text"
              fullWidth
              multiline
              rows={4}
              variant="outlined" 
              size="small"
              />
          </div>
          
          <div className="col-md-10">
          <p>מועד דיון</p>
            <TextField
              id="date"
 
              fullWidth
              type="date"
              InputLabelProps={{
                shrink: true,
              }} 
              variant="outlined" 
              size="small"  
              />
          </div>
          
          
          </div>

              

     
        </div>

  
        </DialogContent>
        <DialogActions className="py-5 mx-auto">
          <Button onClick={handleClose}  variant="contained" >
            בטל
          </Button>
          <Button onClick={handleClose} color="primary" variant="contained">
            שמור
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}