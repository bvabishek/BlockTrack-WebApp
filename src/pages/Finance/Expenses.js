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
import ExpenseDialog from "./ExpenseDialog";
//redux

const Expenses = props => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const rowData = [
    { name: 'Surya', invoiceno: '202301', date: '05/01', desc: 'main ward bed charges', expense: 'bed charges', amt: '30000' }
  ];

  const columnDefs = [
    
    { headerName: 'Invoice no.', field: 'invoiceno', cellStyle: {color: 'green', backgroundColor: '#EEEEEE', fontWeight: 'bold'} },
    { headerName: 'Name', field: 'name' },
    { headerName: 'Date', field: 'date' },
    { headerName: 'Description', field: 'desc' },
    { headerName: 'Expense Head', field: 'expense' },
    { headerName: 'Amount', field: 'amt' },
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
            title={props.t("Expenses")}
            breadcrumbItem={props.t("Expenses")}
          />
          <div style={{display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end'}}>
            <button className="btn btn-primary" onClick={handleClickOpen}>Add Expense</button>
          </div>
            <ExpenseDialog 
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

export default withTranslation()(Expenses);