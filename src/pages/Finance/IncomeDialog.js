import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Row, Col, Input } from 'reactstrap';
import { TextField } from '@mui/material';
import TextArea from 'antd/es/input/TextArea';

export default function AlertDialog({ open, handleClose }) {

    return (
        <div>

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    Add Income details
                </DialogTitle>
                <br />
                <DialogContent>

                    <Row>
                        <Col>
                            <label>Income Head</label>
                            <br />
                            <input style={{width: '100%', height: '30px'}}></input>
                        </Col>
                        <Col>
                            <label>Name</label>
                            <br />
                            <input style={{width: '100%', height: '30px'}}></input>
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col>
                            <label>Invoice No</label>
                            <br />
                            <input style={{width: '100%', height: '30px'}}></input>
                        </Col>
                        <Col>
                            
                            <label>Date</label>
                            <br />
                            <input type='date' style={{width: '100%', height: '30px'}}></input>
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col>
                            <label>Amount</label>
                            <br />
                            <input style={{width: '100%', height: '30px'}}></input>
                        </Col>
                        <Col>
                            <label>Attach Document</label>
                            <br />
                            <input type='file' style={{width: '100%', height: '30px'}}></input>
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        
                        <label>Description</label>
                        <br />
                        <textarea style={{width: '100%', height: '60px'}}></textarea>
                        
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