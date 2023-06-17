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

export default function InventoryDialog({ open, handleClose }) {

    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    Add Item stock
                </DialogTitle>
                <br />
                <DialogContent>
                    <Row>
                        <Col>
                            <TextField
                                label='Item Category'
                                size='small'
                            />
                        </Col>
                        <Col>
                            <TextField
                                label='Item Name'
                                size='small'
                            />
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col>
                            <TextField
                                label='Supplier'
                                size='small'
                            />
                        </Col>
                        <Col>
                            <TextField
                                label='Store'
                                size='small'
                            />
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col>
                        <TextField
                                label='Quantity'
                                size='small'
                            />
                        </Col>
                        <Col>
                            <TextField
                                label='Price'
                                size='small'
                            />
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col>
                        <TextField
                                label='Date'
                                size='small'
                            />
                        </Col>
                        <Col>
                            <TextArea
                                placeholder='Description'
                                rows={3}
                            />
                        </Col>
                    </Row>
                    <br />
                    <Input type='file'/>

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