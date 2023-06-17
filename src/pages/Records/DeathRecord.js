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
import DeathDialog from "./DeathRecordDialog";

//redux

const Deathrecord = props => {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const rowData = [
    {caseid: '202302',ref: 'DREF202302', name: 'Arun',gender: 'male', gname: 'Prakash', date: '06/01',rpt: 'Normal Death'}
  ]

  const columnDefs = [
    { headerName: 'Case ID', field: 'caseid' , cellStyle: {backgroundColor: '#EEEEEE', fontWeight: 'bold', color: 'red'}},
    { headerName: 'Reference no.', field: 'ref' },
    { headerName: 'Patient Name', field: 'name' },
    { headerName: 'Gender', field: 'gender' },
    { headerName: 'Guardian Name', field: 'gname'},
    { headerName: 'Death Date', field: 'date' },
    { headerName: 'Report', field: 'rpt' },
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
            title={props.t("Death Record")}
            breadcrumbItem={props.t("Death Records")}
          />
          <div style={{display: 'flex',justifyContent: 'flex-end', alignItems: 'flex-end'}}>
            <button className="btn btn-outline-danger" onClick={handleClickOpen}>
              Add Death Record
            </button>
          </div>
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
          <DeathDialog 
            open={open}
            handleClose={handleClose}
          />
        </Container>
      </div>
    </React.Fragment>
  );
};


export default withTranslation()(Deathrecord);