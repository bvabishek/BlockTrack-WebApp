import PropTypes from "prop-types";
import React from "react";
import { Container } from "reactstrap";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-balham.css";
import { AgGridReact } from "ag-grid-react";
import { useMemo } from "react";
import { Link } from 'react-router-dom';
import BillDialog from "./billDialog";
//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

//i18n
import { withTranslation } from "react-i18next";


//redux

const Pathology = props => {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  const rowData = [
    { billno: 'PATHO100', caseid: '2022100', rptdate: '06/01', ptname: 'Abishek', refdoc: 'oliver thomas', Amount: '300' },
    { billno: 'PATHO101', caseid: '2022100', rptdate: '06/01', ptname: 'Abishek', refdoc: 'oliver thomas', Amount: '300' },
    { billno: 'PATHO102', caseid: '2022100', rptdate: '06/01', ptname: 'Abishek', refdoc: 'oliver thomas', Amount: '300' },
    { billno: 'PATHO103', caseid: '2022100', rptdate: '06/01', ptname: 'Abishek', refdoc: 'oliver thomas', Amount: '300' },
    { billno: 'PATHO104', caseid: '2022100', rptdate: '06/01', ptname: 'Abishek', refdoc: 'oliver thomas', Amount: '300' }
  ];

  const columnDefs = [
    { headerName: 'Bill No', field: 'billno', cellStyle: { fontWeight: 'bold', color: 'red', backgroundColor: '#F1F6F5' } },
    { headerName: 'Case ID', field: 'caseid' },
    { headerName: 'Reporting Date', field: 'rptdate' },
    { headerName: 'Patient Name', field: 'ptname' },
    { headerName: 'Reference Doctor', field: 'refdoc' },
    { headerName: 'Amount', field: 'Amount' },
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
            title={props.t("Pathology")}
            breadcrumbItem={props.t("Pathology")}
          />
          <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
            <Link to='/pathologytest'>
              <button className="btn btn-danger"><i className="fas fa-bong"></i>&nbsp; Pathology test</button>
            </Link>
            <button className="btn btn-secondary" style={{ marginLeft: '10px' }} onClick={handleClickOpen}><i className="far fa-file"></i>&nbsp; Generate bill</button>
          </div>
          <BillDialog 
            open={open}
            handleClose={handleClose}
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

export default withTranslation()(Pathology);