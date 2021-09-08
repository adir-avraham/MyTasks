import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import useCustomForm from '../../hooks/useCustomForm';
import axios from 'axios';
import { baseUrl } from '../../redux/service';
import { getCasesAction } from '../../redux/actions';
import { useDispatch } from 'react-redux';


export default function AddCase() {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const initialState = {
    case_name: "",
    tasks: "",
    next_sitting: null,

  }
  const [data, handleChange] = useCustomForm(initialState); 

  const handleAddNewCase = async (data: any) => {
    try {
      console.log(data)
      const result = await axios.post(`${baseUrl}/cases/addNewCase`, data);
      const { status } = result.data;
 
      if (status) {
        dispatch(getCasesAction());
        handleClose()
      } 
      } catch  {
      console.log("some error from add new case component");
    };
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
              name="case_name"
              type="text"
              fullWidth
              variant="outlined" 
              size="small"
              onChange={handleChange}
            />
            </div>
          
          <div className="col-md-10">
            <p>משימות</p>
            <TextField 
              id="outlined-basic" 
              name="tasks"
              type="text"
              fullWidth
              multiline
              rows={4}
              variant="outlined" 
              size="small"
              onChange={handleChange}
              />
          </div>
          
          <div className="col-md-10">
          <p>מועד דיון</p>
            <TextField
              id="date"
              name="next_sitting"
              fullWidth
              type="date"
              InputLabelProps={{
                shrink: true,
              }} 
              variant="outlined" 
              size="small"  
              onChange={handleChange}
              />
          </div>
          
          
          </div>

              

     
        </div>

  
        </DialogContent>
        <DialogActions className="py-5 mx-auto">
          <Button onClick={handleClose}  variant="contained" >
            בטל
          </Button>
          <Button onClick={()=>{handleAddNewCase(data)}} color="primary" variant="contained">
            שמור
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}