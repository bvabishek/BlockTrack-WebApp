import PropTypes from "prop-types";
import React from "react";
import { Container } from "reactstrap";
import AlertDialog from "./IncomeDialog";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

//i18n
import { withTranslation } from "react-i18next";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-balham.css";
import { AgGridReact } from "ag-grid-react";
import { useMemo } from "react";
import { style } from "@mui/system";

//redux

const Income = props => {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const rowData = [
    {
      name: "Abishek",
      invoiceid: "2022123",
      date: "05/01",
      description: "medical webapp",
      incomehead: "main ward",
      amount: "100000"
    },
    {
      name: "Venkat",
      invoiceid: "2022124",
      date: "05/01",
      description: "medical webapp",
      incomehead: "main ward",
      amount: "100000"
    },
  ];

  const columnDefs = [

    { headerName: "Invoice ID", field: "invoiceid", cellStyle: { color: 'blue', fontWeight: 'bold', backgroundColor: 'rgba(0,0,0,0.1)' } },
    {
      headerName: "Name",
      field: "name",
      filter: "agSetColumnFilter",
    },
    { headerName: "Date", field: "date" },
    { headerName: "Description", field: "description" },
    { headerName: "Income head", field: "incomehead" },
    { headerName: "Amount", field: "amount" },

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
            title={props.t("Income")}
            breadcrumbItem={props.t("Income")}
          />
          <div style={{display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end'}}><button className='btn btn-primary' variant="outlined" onClick={handleClickOpen}>
            ₹ &nbsp;Add Income
          </button></div>
          <AlertDialog 
            open={open}
            handleClose={handleClose}
          />
        </Container>
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
      </div>
    </React.Fragment>
  );
};


export default withTranslation()(Income);