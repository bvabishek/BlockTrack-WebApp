import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Row, Col, Container } from 'reactstrap';
import { TextField } from '@mui/material';

export default function AmbulanceDialog({ open, handleClose }) {


    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    Add Ambulance details
                </DialogTitle>
                <DialogContent>
                 <Row>
                    <Col lg='3' md='3' sm='12'>
                        <label>Vehicle Model</label>
                        <br />
                        <select style={{width: '100%', height:'30px'}}>
                            <option>select</option>
                        </select>
                    </Col>
                    <Col lg='3' md='3' sm='12'>
                        <label>Driver Name</label>
                        <br />
                        <input style={{width: '100%', height:'30px'}}></input>
                    </Col>
                    <Col lg='3' md='3' sm='12'>
                        <label>Date</label>
                        <br />
                        <input type='date' style={{width: '100%', height:'30px'}}></input>
                    </Col>
                    <Col lg='3' md='3' sm='12'>
                        <label>Charge Category</label>
                        <br />
                        <select style={{width: '100%', height:'30px'}}>
                            <option >select</option>
                        </select>
                    </Col>
                 </Row>
                 <br />
                 <Row>
                 <Col lg='3' md='3' sm='12'>
                        <label>Charge Name</label>
                        <br />
                        <select style={{width: '100%', height:'30px'}}>
                            <option>select</option>
                        </select>
                    </Col>
                    <Col lg='3' md='3' sm='12'>
                        <label>Standard Charge</label>
                        <br />
                        <input style={{width: '100%', height:'30px'}}></input>
                    </Col>
                 </Row>
                 <br />
                 <Row>
                    <Col lg='6' md='6' sm='12'>
                        <label>Note</label>
                        <br />
                        <textarea rows={4} style={{width: '100%'}}></textarea>
                    </Col>
                    <Col lg='6' md='6' sm='12'>
                    <Container>
                    <Row> 
                    <label>Total</label>
                        <br />
                        <input></input>
                        <br />
                        <label>Tax</label>
                        <br />
                        <input></input>
                        <br />
                        <label>Net Amount</label>
                        <br />
                        <input></input>
                        <br />
                        <label>Payment Mode</label>
                        <br />
                        <select>
                            <option>select</option>
                            <option>Cash</option>
                            <option>UPI</option>
                        </select>
                        <br />
                        <label>Payment Amount</label>
                        <br />
                        <input></input>
                        </Row>
                    </Container>
                    
                       
                    </Col>
                 </Row>
                </DialogContent>
                <br />
                <DialogActions>
                    <button className='btn btn-danger' onClick={handleClose}>Cancel</button>
                    <button className='btn btn-primary' onClick={handleClose} autoFocus>
                        Submit
                    </button>
                </DialogActions>
            </Dialog>
        </div>
    );
}