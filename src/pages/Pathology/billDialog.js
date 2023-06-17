import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Row, Col } from 'reactstrap';
import { TextField } from '@mui/material';
export default function BillDialog({open, handleClose}) {
 
return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Generate Bill
        </DialogTitle>
        <DialogContent>
          <Row>
            <Col>
              <TextField 
                margin='dense'
                size='small'
                label='Test Name'
                variant='standard'
              />
            </Col>
            <Col>
              <TextField
                type='date' 
                margin='dense'
                size='small'
                label='Report Date'
              />
            </Col>
          </Row>
          <br />
          <Row>
            <Col>
              <TextField 
                margin='dense'
                size='small'
                label='Test Type'
                variant='outlined'
              />
            </Col>
            <Col>
              <TextField 
                margin='dense'
                size='small'
                label='Doctor Name'
              />
            </Col>
          </Row>
          <br />
          <TextField 
            label='Price'
            margin='dense'
            size='small'
            placeholder='₹'
          />
        </DialogContent>
        <DialogActions>
          <button className='btn btn-danger' onClick={handleClose}>Cancel</button>
          <button className='btn btn-primary' onClick={handleClose} autoFocus>
            Print
          </button>
        </DialogActions>
      </Dialog>
    </div>
  );
}