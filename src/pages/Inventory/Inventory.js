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
import InventoryDialog from "./InventoryDialog";
import { Link } from "react-router-dom";

//redux

const Inventory = props => {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const rowData = [
    { name: 'Abishek', category: 'Bed sheets', supplier: 'VK agency', store: 'VK store', date: '05/01', desc: 'thin bedsheets', qty: '10', price: '500' },
    { name: 'Venkat', category: 'Bed sheets', supplier: 'VK agency', store: 'VK store', date: '05/01', desc: 'thin bedsheets', qty: '10', price: '500' }

  ];

  const columnDefs = [
    { headerName: 'Name', field: 'name' },
    { headerName: 'Category', field: 'category' },
    { headerName: 'Supplier', field: 'supplier' },
    { headerName: 'Store', field: 'store' },
    { headerName: 'Date', field: 'date' },
    { headerName: 'Description', field: 'desc' },
    { headerName: 'Quantity', field: 'qty' },
    { headerName: 'Price', field: 'price' },
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
            title={props.t("Inventory")}
            breadcrumbItem={props.t("Inventory")}
          />
          <div style={{display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end'}}>
            <button className="btn btn-primary" onClick={handleClickOpen}>Add Item Stock</button>
            <Link to='/items'><button className="btn btn-secondary" style={{marginLeft: '10px'}}><i className="fas fa-align-justify"></i>&nbsp; Item</button></Link>
          </div>
          <InventoryDialog 
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

export default withTranslation()(Inventory);