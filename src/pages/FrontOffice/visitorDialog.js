import React,{useState} from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Row, Col, Label, Input } from 'reactstrap';
import { TextField } from '@mui/material';
import TextArea from 'antd/es/input/TextArea';
import { useFormik } from 'formik';

export default function VisitorDialog({ open, handleClose, data, onChange, handleFormSubmit }) {
    
    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    Add Visitor Details
                </DialogTitle>
                <DialogContent>
                    <br />
                    <Row>
                        <Col>
                            <TextField
                                id='purpose'
                                label='purpose'
                                size='small'
                                value={data.purpose}
                                onChange={e => onChange(e)}
                            />
                        </Col>
                        <Col>
                            <TextField
                                label='Name'
                                id='name'
                                size='small'
                                value={data.name}
                                onChange={e => onChange(e)}
                            />
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col>
                            <TextField
                                label='Number of Person'
                                id='no_of_pepple'
                                size='small'
                                type='number'
                                value={data.no_of_pepple}
                                onChange={e => onChange(e)}
                            />
                        </Col>
                        <Col>
                            <TextField
                                label='Phone'
                                id='contact'
                                size='small'
                                value={data.contact}
                                onChange={e => onChange(e)}
                            />
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col>
                            <TextField
                                id='visit_to'
                                label='Visit To'
                                placeholder='IPD/OPD/Staff'
                                size='small'
                                value={data.visit_to}
                                onChange={e => onChange(e)}
                            />
                        </Col>
                        <Col>
                            <TextField 
                                id='related_to'
                                label='Related to'
                                placeholder='patient/staff'
                                size='small'
                                value={data.related_to}
                                onChange={e => onChange(e)}
                            />
                        </Col>

                    </Row>
                    <br />
                    <Row>
                        <Col>
                            <TextField 
                                id='id_proof'
                                label='ID Card'
                                placeholder=''
                                size='small'
                                type='text/number'
                                value={data.id_proof}
                                onChange={e => onChange(e)}
                            />
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col>
                            <Label>In Time</Label>
                            <br />
                            <TextField
                                id='in_time'
                                type='text/number'
                                size='small'
                                style={{width: '130px'}}
                                value={data.in_time}
                                onChange={e => onChange(e)}
                            />
                        </Col>
                        <Col>
                            <Label>Out Time</Label>
                            <br />
                            <TextField
                                id='out_time'
                                type='text/number'
                                size='small'
                                style={{width: '130px'}}
                                value={data.out_time}
                                onChange={e => onChange(e)}
                            />
                        </Col>
                        <Col>
                            <Label>Date</Label>
                            <br />
                            <Input 
                                id='date'
                                type='date'
                                size='small'
                                style={{width: '130px'}}
                                value={data.date}
                                onChange={e => onChange(e)}
                            >
                            </Input>
                        </Col>
                    </Row>
                    <br />
                    <Label>Note</Label>
                    <br />
                    <TextArea 
                        id='note'
                        rows={3}
                        placeholder='Note'
                        value={data.note}
                        onChange={e => onChange(e)}
                    />
                    <br/>
                    <br />  
                    <Label>Image</Label>
                    <Input
                    type='file'
                    id='image'
                    value={data.image}
                    onChange={e=>onChange(e)}
                    >
                    </Input>
                    <br />
                </DialogContent>
                <DialogActions>
                    <button className='btn btn-danger' onClick={handleClose}>Cancel</button>
                    <button className='btn btn-primary' onClick={() => handleFormSubmit()} autoFocus>
                        Submit
                    </button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
