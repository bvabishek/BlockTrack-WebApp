import PropTypes from "prop-types";
import React from "react";
import { Container } from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

//i18n
import { withTranslation } from "react-i18next";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { AgGridReact } from "ag-grid-react";
import { useMemo } from "react";
import ItemDialog from "./ItemDialog";

//redux

const Item = props => {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const rowData = [
        { item: 'Surgical Lights', category: 'Equipments', unit: '100', desc: '	A surgical light which is also called as an operating light is a medical equipment which helps medical personnel during a surgery by illuminating on a local area of the patient.', qty: '20' }
    ];

    const columnDefs = [
        { headerName: 'Item', field: 'item' },
        { headerName: 'Category', field: 'category' },
        { headerName: 'Unit', field: 'unit' },
        { headerName: 'Description', field: 'desc', cellStyle: {} },
        { headerName: 'Quantity', field: 'qty' },
        {headerName: "Actions", field: "id", cellRendererFramework:(params)=><div>
      <button className="btn btn-outline-danger btn-sm" onClick={()=>handleDelete(params.value)}>
      <i className="fas fa-trash"></i>&nbsp;Delete
      </button>
    </div> }
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
                        title={props.t("Items")}
                        breadcrumbItem={props.t("Item List")}
                    />
                    <div style={{display : 'flex', justifyContent: 'flex-end', alignItems: 'flex-end'}}>
                        <button className="btn btn-outline-primary" onClick={handleClickOpen}><i className="fas fa-cart-plus"></i>&nbsp; Add Item</button>
                    </div>
                    <div
                        className="ag-theme-alpine"
                        style={{ height: 500, marginTop: "20px" }}
                    >
                        <AgGridReact
                            rowData={rowData}
                            columnDefs={columnDefs}
                            defaultColDef={defaultColDef}
                        />
                    </div>
                    <ItemDialog 
                        open={open}
                        handleClose={handleClose}
                    />
                </Container>
            </div>
        </React.Fragment>
    );
};

export default withTranslation()(Item);