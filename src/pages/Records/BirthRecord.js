import PropTypes from "prop-types";
import React from "react";
import { Container } from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

//i18n
import { withTranslation } from "react-i18next";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-balham.css";
import { AgGridReact } from "ag-grid-react";
import { useMemo } from "react";
import BirthDialog from "./BirthRecordDialog";

//redux

const Birthrecord = props => {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const rowData = [
    { ref: 'BREF202301', caseid: '202301', name: 'Mohit', gender: 'male', fname: 'Rahul', mname: 'kriti', rpt: 'Normal delivery', date: '06/01/2023' }
  ];

  const columnDefs = [
    { headerName: 'Case ID', field: 'caseid' , cellStyle: {backgroundColor: '#EEEEEE', fontWeight: 'bold', color: 'green'}},
    { headerName: 'Reference no.', field: 'ref' },
    { headerName: 'Child Name', field: 'name' },
    { headerName: 'Gender', field: 'gender' },
    { headerName: 'Father Name', field: 'fname' },
    { headerName: 'Mother Name', field: 'mname' },
    { headerName: 'Report', field: 'rpt' },
    { headerName: 'Birth Date', field: 'date' },
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
            title={props.t("Birth Record")}
            breadcrumbItem={props.t("Birth Records")}
          />
          <div style={{display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end'}}>
            <button className="btn btn-primary" onClick={handleClickOpen}>Add Birth Record</button>
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
          <BirthDialog 
            open={open}
            handleClose={handleClose}
          />
        </Container>
      </div>
    </React.Fragment>
  );
};

export default withTranslation()(Birthrecord);