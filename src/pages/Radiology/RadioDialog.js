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
import { useEffect } from 'react';
import api from 'services/Api';
import { useState } from 'react';

export default function RadioDialog({open,handleClose}) {
    const [chargeCategory,setChargeCategory] = useState([])
    const [chargeName,setChargeName] = useState([])
    const [radiologyCategory,setRadiologyCategory] = useState([])
    const [testParameter,setTestParameter] = useState([])
    const [formValue,setFormValue] = useState({
        test_name:'',
        short_name:'',
        charge_category_id:'',
        test_type:'',
        radiology_category_id:'',
        sub_category:'',
        report_days:'',
        test_parameter:'',
        charge_id:'',
        amount:'',
        tax:'',
        standard_charge:'',
        created_at:'2012-12-01 11:11:11'
    })
    useEffect(()=>{
        getChargeCategory()
    },[])
    const handleChange = (event) =>{
    const {name,value} = event.target
    setFormValue({
        ...formValue,[name]:value
    })
    }
    const getChargeCategory = async () =>{
    const response = await api.getIpdChargeCategory()
    const {data} = response 
    setChargeCategory(data)
    }
    const getChargeName= async () =>{
        const response = await api.getIpdChargeName(formValue.charge_category_id)
        const {data} = response
        console.log(data,"chargename")
        setChargeName(data)
    }
    const getRadioCategory = async () =>{
        const response = await api.getRadiologyCategory()
        const {data} = response 
        setRadiologyCategory(data)
        console.log(data,"data")
    }
    const getTestParmeterName = async () =>{
        const response = await api.getRadiologyTestParameters(formValue.test_parameter)
        const {data} = response
        setTestParameter(data)
        console.log(data,"test parameters got it")
    }
    const handleSubmit = async () =>{
        const response = await api.postRadiologyDetails(formValue)
    }
console.log(formValue,"KKK")

    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    Add Radiology Details
                </DialogTitle>
                <DialogContent>
                <br />
                    <Row>
                        <Col>
                            <TextField 
                            onChange={handleChange}
                            value={formValue.test_name}
                            name='test_name'
                                label='Test Name'
                                id='tname'
                                size='small'
                            />
                        </Col>
                        <Col>
                            <TextField 
                            name='short_name'
                            onChange={handleChange}
                            value={formValue.short_name}
                                label='Short Name'
                                id='sname'
                                size='small'
                            />
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col>
                            <TextField 
                            name='test_type'
                            onChange={handleChange}
                            value={formValue.test_type}
                                label='Test Type'
                                id='ttype'
                                size='small'
                            />
                        </Col>
                        <Col>
                        <label>Charge Category</label>
                <br />
                <select name="charge_category_id" style={{width: '100%', height: '40px'}} onChange={handleChange} value={formValue.charge_category_id}>
                  <option >Select</option>
                 {chargeCategory && chargeCategory.map((charge=>(
                    <option key={charge.id} value={charge.id}>{charge.name}</option>
                 )))}
                </select>
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col>
                            <TextField 
                            onChange={handleChange}
                            value={formValue.sub_category}
                            name='sub_category'
                                label='Sub-Category'
                                id='sctrgy'
                                size='small'
                            />
                        </Col>
                        <Col>
                            <TextField 
                            onChange={handleChange}
                            value={formValue.report_days}
                            name='report_days'
                                label='Reporting Date'
                                id='rdate'
                                size='small'
                            />
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col>
                            <TextField 
                            onChange={handleChange}
                            value={formValue.tax}
                            name='tax'
                                label='Tax'
                                id='amt'
                                size='small'
                            />
                        </Col>
                        <Col>
                            <TextField 
                            onChange={handleChange}
                            value={formValue.standard_charge}
                            name='standard_charge'
                                label='Standard Charge'
                                id='rdate'
                                size='small'
                            />
                        </Col>
                       
                    </Row>
                    <Row>
                  
                        <Col>
                        <label>Charge Name</label>
                <br />
                <select style={{width: '100%', height: '40px'}} name="charge_id" onClick={()=>getChargeName()} onChange={handleChange} value={formValue.charge_id} >
                  <option >Select</option>
                 {chargeName && chargeName.map((val=>(
                    <option key={val.id} value={val.id}>{val.name}</option>
                 )))}

                </select>
                        </Col>
                      <Col>
                      <label>Category Name</label>
                <br />
                <select style={{width: '100%', height: '40px'}}  name="radiology_category_id" onClick={()=>getRadioCategory()} onChange={handleChange} value={formValue.radiology_category_id} >
                    <option >Select</option>
                    {radiologyCategory && radiologyCategory.map((val=>(
                    <option key={val.id} value={val.id} >{val.lab_name}</option>
                    )))}
                 

                </select>
                      </Col>
                      
                    </Row>
                   <Row>
                    <Col>
                    {/* <Col> */}
                  
                        <TextField 
                        name="amount"
                        onChange={handleChange}
                        value={formValue.amount}
                                label='Amount(₹)'
                                id='rdate'
                                size='small'
                            />
                        {/* </Col> */}
                    </Col>
                    <Col>
                    <label>Test parameter Name</label>
                <br />
                    <select style={{width: '100%', height: '40px'}} name="test_parameter" onChange={handleChange} value={formValue.test_parameter} onClick={()=>getTestParmeterName()}>
                        <option>select</option>
                        {testParameter && testParameter.map((val=>(
                        <option onClick={()=>getTestParmeterName()} key={val.id} value={val.id}>{val.parameter_name}</option>
                        )))}
                    </select>
                    </Col>
                   </Row>
                   
                   <Row>
                    <Col>
                    {testParameter && testParameter.map((val=>(
                    <TextField 
                    onChange={handleChange}
                            name='unit'
                          label='unit'
                                value={val.unit}
                                id='rdate'
                                size='small'
                            />
                        )))}
                    </Col>
                    <Col>
                    {testParameter && testParameter.map((val=>(
                    <TextField 
                    onChange={handleChange}
                            name='reference_range'
                            label='reference_range'
                                value={val.reference_range}
                                id='rdate'
                                size='small'
                            />
                        )))}
                    </Col>
                   </Row>
                </DialogContent>
                <DialogActions>
                    <button className='btn btn-danger' onClick={handleClose}>Cancel</button>
                    <button className='btn btn-primary' onClick={()=>handleSubmit(handleClose)} autoFocus>
                        Submit
                    </button>
                </DialogActions>
            </Dialog>
        </div>
    );
}