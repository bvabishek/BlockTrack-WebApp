import PropTypes from "prop-types";
import React from "react";
import { Container } from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

//i18n
import { withTranslation } from "react-i18next";
//ag-grid modules
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-balham.css";
import { AgGridReact } from "ag-grid-react";
import { useMemo } from "react";
import { Link } from "react-router-dom";
import BillDialog from "pages/Pathology/billDialog";
import RadiologyBillDialog from "./RadiologyBillDialog";

const Radiology = props => {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
 const rowData = [
    {bill_no: '1', caseid: '100', rptdate: '2023-05-06', name: 'Abishek', ref: 'Amit singh', note: '',prev: '',amt: '200',paidamt: '100',balance: '50' }
  ];

  const columnDefs = [
    {headerName: 'Bill No', field: 'bill_no'},
    {headerName: 'Case ID', field: 'caseid'},
    {headerName: 'Reporting Date', field: 'rptdate'},
    {headerName: 'Patient Name', field: 'name'},
    {headerName: 'Reference Doctor', field: 'ref'},
    {headerName: 'Note', field: 'note'},
    {headerName: 'Previous Report Value', field: 'prev'},
    {headerName: 'Amount', field: 'amt'},
    {headerName: 'Paid Amount', field: 'paidamt'},
    {headerName: 'Balance Amount', field: 'balance'}
  ];

  const defaultColDef = useMemo(
    () => ({
      sortable: true,
      filter: true,
      flex: 1,
    }),
    []
  );

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumb */}
          <Breadcrumbs
            title={props.t("Radiology")}
            breadcrumbItem={props.t("Radiology")}
          />
          <div style={{display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end'}}>
            <Link to='/radiotest'><button className="btn btn-secondary"><i className="fas fa-microscope"></i> &nbsp;Radiology Test</button></Link>
            <button className="btn btn-primary" style={{ marginLeft: '10px' }} onClick={handleClickOpen}><i className="fas fa-microscope"></i> &nbsp;Generate Bill</button>
          </div>
          <RadiologyBillDialog
            open={open}
            handleClose={handleClose}
          />
          <div
            className="ag-theme-balham"
            style={{ height: 500, marginTop: "20px" }}
          >
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

export default withTranslation()(Radiology);