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

export default function ExpenseDialog({ open, handleClose }) {


    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    Add Expense Details
                </DialogTitle>
                <DialogContent>
                <Row>
                        <Col>
                            <label>Expense Head</label>
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
                    <button onClick={handleClose} className='btn btn-danger'>Cancel</button>
                    <button onClick={handleClose} autoFocus className='btn btn-primary'>
                        Submit
                    </button>
                </DialogActions>
            </Dialog>
        </div>
    );
}