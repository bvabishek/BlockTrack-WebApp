import PropTypes from "prop-types";
import React from "react";
import { useState, useEffect } from "react";
import { Container } from "reactstrap";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-balham.css";
import { AgGridReact } from "ag-grid-react";
import { useMemo } from "react";
import api from "services/Api";
import BillingDialog from "../BillingDialog/BillingDialog";

//Import Breadcrumb
// import Breadcrumbs from "../../components/Common/Breadcrumb";

//i18n
import { withTranslation } from "react-i18next";
// import OpdDialog from "./DialogOpd";
import { clearConfigCache } from "prettier";
//redux

const OpdBilling = props => {
  const initialOpdValue = {
    case_reference_id: "",
    patient_id: "",
    generated_by: "1",
    is_ipd_moved: "0",
    discharged: "yes",
    created_at: "2023-05-04 11:11:11"
  }
  const [id, setId] = useState('')

const [fetchData,setFetchData] = useState('')
console.log(fetchData,'fetchdata');
  const [open, setOpen] = useState(false);
  const [tableData, setTableData] = useState(null)
  const [formData, setFormData] = useState(initialOpdValue)
  const [openBillDialog, setOpenBillDialog] = useState();

  const handleOpenBill = () => {
    setOpenBillDialog(true);
  }

  const handleCloseBill = () => {
    setOpenBillDialog(false);
  }

  console.log(formData, 'formData')

  {console.log(tableData,'data')}


  const onChange = e => {
    //catch the parameters when changed.
    const { value, id } = e.target
    setFormData({ ...formData, [id]: value })
    // setFormData1({ ...formData1, [id]: value })
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };



  const columnDefs = [
    {
      headerName: "Patient ID",
      field: "id",
      filter: "agSetColumnFilter",
      cellStyle: { color: 'purple', fontWeight: '500', backgroundColor: '#EEEEEE' },
      cellRenderer: (params) => {
        const pid = params.data.id;
        return (
          <a href={`/opdprofile/${pid}`}>
            {'OPDN' + pid}
          </a>
        );
      }
    },
    {
      headerName: "Name", field: "patient_name", cellRenderer: (params) => {
        const name = params.data.patient_name;
        return (
          <p>
            {name}
          </p>
        );
      }
    },
    { headerName: "Gender", field: "gender" },
    { headerName: "Contact", field: "mobileno" },
    { headerName: "Consultant", field: "name" },
    { headerName: "Last visit", field: "date" },
    { headerName: "Age", field: "age" }
    //{ headerName: "Total Recheckup", field: "totalrecheckup" },
  ];

  const defaultColDef = useMemo(
    () => ({
      sortable: true,
      filter: true,
      flex: 1,
    }),
    []
  );

  useEffect(() => {
    // getUsers from json
    getDetails()
  }, [])

  const getDetails = () => {
    
    // api.getPatient().then(res => setTableData(res.data))
    api.getOpd().then(res => {
      console.log(res,'response');
      setTableData(res.data)})
    
    api.http
  }

  function patientId(e){
    console.log(e.target.value,"nameeeeeeeeeeee")
    const patientId = e.target.value;
    setId(patientId);
  }

  function handleFormSubmit(event) {

    // const payload = {
    //   case_reference_id: "1",
    //   patient_id: id, // Assign the patient ID to the patient_id field
    //   generated_by: "1",
    //   is_ipd_moved: "no",
    //   discharged: "2023-04-25 14:07:22",
    //   created_at: ""
    // };
  
    api.postOpd(formData).then(resp => {
      console.log(resp);
      console.log(resp.data, 'patient');
    });
  
    api
      .getOpd({ headers: { "content-type": "application/json" } })
      .then(resp => {
        getDetails();
        setFormData(initialOpdValue);
        console.log()
        event.preventDefault();
      });
  
    handleClose();
  }
  
   return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
         <h4>OPD Billing List</h4>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "flex-end",
            }}
          >
            <button className="btn btn-secondary" onClick={handleOpenBill}>
            <i className="fa fa-plus"></i>
              &nbsp;Add Patient
            </button>
            <BillingDialog open={openBillDialog} handleClose={handleCloseBill}/>
          </div>
        </Container>
        <div
          className="ag-theme-balham"
          style={{ height: 500, marginTop: "20px" }}
        >
          <AgGridReact
            rowData={tableData}
            columnDefs={columnDefs}
            defaultColDef={defaultColDef}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default withTranslation()(OpdBilling);