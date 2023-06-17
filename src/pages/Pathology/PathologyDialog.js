import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Row, Col } from 'reactstrap';
import { TextField } from "@mui/material";

export default function PathologyDialog({ open, handleClose }) {

    return (
        <div>

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    Add New Pathology
                </DialogTitle>
                <DialogContent>
                    <Row>
                        <Col>
                            <TextField
                                id="testname"
                                placeholder="Enter test name"
                                label="Test name"
                                margin="dense"
                                variant='outlined'
                                size='small'
                            />
                        </Col>
                        <Col>
                            <TextField
                                id="testtype"
                                label="Test type"
                                placeholder=""
                                margin="dense"
                                variant='outlined'
                                size='small'
                            />
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col>
                            <TextField
                                id="category"
                                placeholder=""
                                label="Category"
                                margin="dense"
                                variant='outlined'
                                size='small'
                            />
                        </Col>
                        <Col>
                            <TextField
                                id="Method"
                                label="Method"
                                placeholder=""
                                margin="dense"
                                variant='outlined'
                                size='small'
                            />
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col>
                            <TextField
                                id="rptdays"
                                placeholder=""
                                label="Report days"
                                margin="dense"
                                variant='outlined'
                                size='small'
                            />
                        </Col>
                        <Col>
                            <TextField
                                id="Amount"
                                label="Amount"
                                placeholder="₹"
                                margin="dense"
                                variant='outlined'
                                size='small'
                            />
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