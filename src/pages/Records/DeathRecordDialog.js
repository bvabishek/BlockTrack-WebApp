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

export default function DeathDialog({ open, handleClose }) {


    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    Add Death Details
                </DialogTitle>
                <DialogContent>
                    <Row>
                        <Col lg='3' md='3' sm='12'>
                            <label>Case ID</label>
                            <br />
                            <input style={{width: '100%', height: '30px'}}></input>
                        </Col>
                        <Col lg='3' md='3' sm='12'>
                            <label>Patient Name</label>
                            <br />
                            <input style={{width: '100%', height: '30px'}}></input>
                        </Col>
                        <Col lg='3' md='3' sm='12'>
                            <label>Death Date</label>
                            <br />
                            <input style={{width: '100%', height: '30px'}}></input>
                        </Col>
                        <Col lg='3' md='3' sm='12'>
                            <label>Guardian Name</label>
                            <br />
                            <input style={{width: '100%', height: '30px'}}></input>
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col lg='6' md='6' sm='12'>
                            <label>Attachment</label>
                            <br />
                            <input style={{width: '100%', height: '30px'}}></input>
                        </Col>
                        <Col lg='6' md='6' sm='12'>
                            <label>Report</label>
                            <br />
                            <textarea rows={3} style={{width: '100%'}}></textarea>
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