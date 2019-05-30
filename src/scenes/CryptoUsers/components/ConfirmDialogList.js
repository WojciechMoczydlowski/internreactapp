import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Paper from '@material-ui/core/Paper';
import Draggable from 'react-draggable';

function PaperComponent(props) {
  return (
    <Draggable cancel={'[class*="MuiDialogContent-root"]'}>
      <Paper {...props} />
    </Draggable>
  );
}

function ConfirmDialogList(props) {
  
  const handleDialog = (confirmation) =>{ 
    if(confirmation){
      props.delete()
    }
     props.showConfirmDialog(false);
  }
  
  const {display , message , title} = props;
  return (
    <div>
      <Dialog
        open={display}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
          {title}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
          {message}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() =>handleDialog(false)} color="primary">
            Cancel
          </Button>
          <Button onClick={() =>handleDialog(true)} color="primary">
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default ConfirmDialogList;