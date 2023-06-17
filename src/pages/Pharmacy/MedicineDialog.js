import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Row, Col } from 'reactstrap';
import { TextField } from "@material-ui/core";
import Medicines from './Medicines';

export default function AlertDialog({ open, handleClose, data, onChange, handleFormSubmit }) {

    return (
        <div>

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title" className='bg-primary bg-soft text-primary'>
                    Add Medicine details
                </DialogTitle>
                <DialogContent className='mt-2'>
                <br />
                    <Row>
                        <Col lg='3' sm='3' className='mt-3'>
                           <label>Medicine Name</label>
                           <br />
                           <input placeholder='' style={{width: '100%', height: '30px'}} id='medicine_name' value={data.medicine_name} onChange={e=>onChange(e)}></input> 
                        </Col>
                        <Col lg='3' sm='3'>
                            <label>Medicine Category</label>
                            <br />
                            <select style={{width: '100%', height: '30px'}} id='medicine_category' value={data.medicine_category} onChange={e=>onChange(e)}>
                                <option>select</option>
                                <option value="tablet">tablet</option>
                            </select>
                        </Col>
                        <Col lg='3' sm='3'>
                           <label>Medicine Company</label>
                           <br />
                           <input placeholder='' style={{width: '100%', height: '30px'}} id='medicine_company' value={data.medicine_company} onChange={e=>onChange(e)}></input> 
                        </Col>
                        <Col lg='3' sm='3'>
                           <label>Medicine Composition</label>
                           <br />
                           <input placeholder='' style={{width: '100%', height: '30px'}} id='medicine_composition' value={data.medicine_composition} onChange={e=>onChange(e)}></input> 
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col lg='3' sm='3'>
                        <label>Medicine Group</label>
                           <br />
                           <input placeholder='' style={{width: '100%', height: '30px'}} id='medicine_group' value={data.medicine_group} onChange={e=>onChange(e)}></input> 
                        </Col>
                        <Col lg='3' sm='3'>
                        <label>Unit</label>
                           <br />
                           <input placeholder='' style={{width: '100%', height: '30px'}} type='number' id='unit' value={data.unit} onChange={e=>onChange(e)}></input> 
                        </Col>
                        <Col lg='3' sm='3'>
                        <label>Min Level</label>
                           <br />
                           <input placeholder='' style={{width: '100%', height: '30px'}} type='number'></input> 
                        </Col>
                        <Col lg='3' sm='3'>
                        <label>Re-Order Level</label>
                           <br />
                           <input placeholder='' style={{width: '100%', height: '30px'}} type='number'></input> 
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col lg='4' sm='3'>
                        <label>Tax</label>
                           <br />
                           <input placeholder='%' style={{width: '100%', height: '30px'}} type='number'></input> 
                        </Col>
                        <Col lg='4' sm='3'>
                        <label>Unit/Packing</label>
                           <br />
                           <input placeholder='' style={{width: '100%', height: '30px'}} type='number'></input> 
                        </Col>
                        <Col lg='4' sm='3'>
                        <label>VAT A/C</label>
                           <br />
                           <input placeholder='' style={{width: '100%', height: '30px'}} ></input> 
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col lg='7' sm='3'>
                            <label>Note</label>
                            <br />
                            <textarea minLength='infinity' style={{width: '100%'}}></textarea>
                        </Col>
                        <Col lg='5' sm='3'>
                            <label>Medicine Photo(JPEG | JPG | PNG)</label>
                            <br />
                            <input type='file' id='medicine_image' value={data.medicine_image} onChange={e=>onChange(e)}></input>
                        </Col>
                    </Row>
                    <br />
                </DialogContent>
                <DialogActions>
                    <button className='btn btn-primary' onClick={handleFormSubmit} autoFocus>
                        Save
                    </button>
                </DialogActions>
            </Dialog>
        </div>
    );
}