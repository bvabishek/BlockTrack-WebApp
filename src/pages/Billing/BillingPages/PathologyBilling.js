import PropTypes from "prop-types";
import React from "react";
import { Container } from "reactstrap";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-balham.css";
import { AgGridReact } from "ag-grid-react";
import { useMemo , useState , useEffect} from "react";
import { Link } from 'react-router-dom';
// import BillDialog from "./billDialog";
//Import Breadcrumb

//i18n
import { withTranslation } from "react-i18next";
import PathologyBillingDialog from "../BillingDialog/PathologyBillDialog";
import api from "services/Api";


//redux

const PathologyBilling = props => {

  const initialPathologyValue = {
    case_reference_id: "1",
    patient_id: "4",
    generated_by: "1",
    doctor_id: "2",
    transaction_id: "1",
    tax_percentage: "",
    apply_charge: "10.00",
    created_at: "2023-02-02 11:11:11",
    pathology_billing_id: "1",
    pathology_id: "1",
    collection_specialist: "1",
    approved_by: "1",
    section: "OPD",
    ambulance_call_id: "1",
    appointment_id: "1",
    opd_id: "1",
    ipd_id: "4",
    pharmacy_bill_basic_id: "1",
    radiology_billing_id: "1",
    blood_donor_cycle_id: "1",
    blood_issue_id: "1",
    date: "2023-02-02",
    basicId: "1",
    doctor_name: ""
  }

  const [open, setOpen] = React.useState(false);
  const [tableData,setTableData] = useState()
  const [formData,setFormData] = useState(initialPathologyValue)

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const rowData = [
    {id: '1', case_reference_id: '1', date: '2023-05-06', patient_name: 'Abishek', doctor_name: 'amit', transaction_amount: '2000', net_amount: '300', balance_amount: '100'}
  ]
  

  const columnDefs = [
    { headerName: 'Bill No', field: 'id', cellStyle: { fontWeight: 'bold', color: 'red', backgroundColor: '#F1F6F5' } },
    { headerName: 'Case ID', field: 'case_reference_id' },
    { headerName: 'Reporting Date', field: 'date' },
    { headerName: 'Patient Name', field: 'patient_name' },
    { headerName: 'Reference Doctor', field: 'doctor_name' },
    { headerName: 'Amount($)', field: 'transaction_amount' },
    { headerName: 'Paid Amount($)', field: 'net_amount' },
    { headerName: 'Balance Amount($)', field: 'balance_amount' }
  ];

  const defaultColDef = useMemo(
    () => ({
      sortable: true,
      filter: true,
      flex: 1,
    }),
    []
  );


  // const onChange = e => {
  //   //catch the parameters when changed.
  //   const { value, id } = e.target
  //   setFormData({ ...formData, [id]: value })
  //   // setFormData1({ ...formData1, [id]: value })
  // }

  // useEffect(() => {
  //   // getUsers from json
  //   getPathologyBillList()
  // }, [])

  // const getPathologyBillList = () => {
    
  //   // api.getPatient().then(res => setTableData(res.data))
  //   api.getPathologyBill().then(res => {
  //     console.log(res,'response');
  //     setTableData(res.data)})
    
  //   api.http
  // }


  // function handleFormSubmit(event) {

  //   // const payload = {
  //   //   case_reference_id: "1",
  //   //   patient_id: id, // Assign the patient ID to the patient_id field
  //   //   generated_by: "1",
  //   //   is_ipd_moved: "no",
  //   //   discharged: "2023-04-25 14:07:22",
  //   //   created_at: ""
  //   // };
  
  //   api.postPathologyGenerateBill(formData).then(resp => {
  //     console.log(resp);
  //     console.log(resp.data, 'patient');
  //   });

  //   api.postPathologyReport(formData).then(resp => {
  //     console.log(resp);
  //     console.log(resp.data, 'patient');
  //   });

  //   api.postPathologyTransaction(formData).then(resp => {
  //     console.log(resp);
  //     console.log(resp.data, 'patient');
  //   });
  
  //   api
  //     .getPathologyBill({ headers: { "content-type": "application/json" } })
  //     .then(resp => {
  //       getPathologyBillList();
  //       setFormData(initialPathologyValue);
  //       console.log()
  //       event.preventDefault();
  //     });
  
  //   handleClose();
  // }
  

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <h4>Pathology Bill</h4>
          <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
            <button className="btn btn-secondary" style={{ marginLeft: '10px' }} onClick={handleClickOpen}><i className="far fa-file"></i>&nbsp; Generate bill</button>
          </div>
          <PathologyBillingDialog 
            open={open}
            handleClose={handleClose}
            data={formData}
            // onChange={onChange}
            // handleFormSubmit={handleFormSubmit}
          />

          <div className="ag-theme-balham"
            style={{ height: 500, marginTop: "20px" }}>
            <AgGridReact
              rowData={rowData}
              columnDefs={columnDefs}
              defaultColDef={defaultColDef}
            />
          </div>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default withTranslation()(PathologyBilling);