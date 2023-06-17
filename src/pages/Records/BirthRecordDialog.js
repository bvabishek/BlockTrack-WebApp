import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Row, Col } from 'reactstrap';
import { TextField } from '@mui/material';
import TextArea from 'antd/es/input/TextArea';

export default function BirthDialog({ open, handleClose }) {


    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    Add Birth Details
                </DialogTitle>
                <DialogContent>
                   <Row>
                    <Col lg='3' md='3' sm='12'>
                        <label>Child Name</label>
                        <br />
                        <input style={{width: '100%', height: '30px'}}></input>
                    </Col>
                    <Col lg='3' md='3' sm='12'>
                        <label>Gender</label>
                        <br />
                        <select style={{width: '100%', height: '30px'}}>
                            <option>select</option>
                            <option>male</option>
                            <option>Female</option>
                        </select>
                    </Col>
                    <Col lg='3' md='3' sm='12'>
                        <label>Weight</label>
                        <br />
                        <input style={{width: '100%', height: '30px'}}></input>
                    </Col>
                    <Col lg='3' md='3' sm='12'>
                        <label>Child Photo</label>
                        <br />
                        <input type='file' style={{width: '100%', height: '30px'}}></input>
                    </Col>
                   </Row>
                   <br />
                   <Row>
                    <Col lg='4' md='4' sm='12'>
                        <label>Phone</label>
                        <br />
                        <input style={{width: '100%', height: '30px'}}></input>
                    </Col>
                    <Col lg='4' md='4' sm='12'>
                        <label>Address</label>
                        <br />
                        <textarea style={{width: '100%'}}></textarea>
                    </Col>
                    <Col lg='4' md='4' sm='12'>
                        <label>Case ID</label>
                        <br />
                        <input style={{width: '100%', height: '30px'}}></input>
                    </Col>
                   </Row>
                   <br />
                   <Row>
                    <Col lg='6' md='6' sm='12'>
                        <label>Mother Name</label>
                        <br />
                        <input style={{width: '100%', height: '30px'}}></input>
                    </Col>
                    <Col lg='6' md='6' sm='12'>
                        <label>Mother Photo</label>
                        <br />
                        <input type='file' style={{width: '100%', height: '30px'}}></input>
                    </Col>
                    </Row>
                    <br />
                    <Row>
                    <Col lg='6' md='6' sm='12'>
                        <label>Father Name</label>
                        <br />
                        <input style={{width: '100%', height: '30px'}}></input>
                    </Col>
                    <Col lg='6' md='6' sm='12'>
                        <label>Father Photo</label>
                        <br />
                        <input type='file' style={{width: '100%', height: '30px'}}></input>
                    </Col>
                    </Row>
                   
                   
                   <br />
                   <Row>
                    <Col lg='6' md='6' sm='12'> 
                        <label>Report</label>
                        <br />
                        <textarea rows={3} style={{width: '100%'}}></textarea>
                    </Col>
                    <Col lg='6' md='6' sm='12'>
                        <label>Attach Document Photo</label>
                        <br />
                        <input type='file' style={{width: '100%', height: '30px'}}></input>
                    </Col>
                   </Row>
                </DialogContent>
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