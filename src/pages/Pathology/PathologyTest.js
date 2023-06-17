import PropTypes from "prop-types";
import React from "react";
import { Container } from "reactstrap";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { AgGridReact } from "ag-grid-react";
import { useMemo } from "react";
import PathologyDialog from "./PathologyDialog";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

//i18n
import { withTranslation } from "react-i18next";

//redux

const pathologyTest = props => {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const rowData = [
        { testname: 'Chest X-Ray', testtype: 'X-ray', category: 'Clinical microbilogy', method: 'Imaging test', rpt: '1day', Amount: '200' }
    ];

    const columnDefs = [
        { headerName: 'Test Name', field: 'testname' , cellStyle: {backgroundColor: '#FFFBAC', fontWeight: 'bold'}},
        { headerName: 'Test Type', field: 'testtype' },
        { headerName: 'Category', field: 'category' },
        { headerName: 'Method', field: 'method' },
        { headerName: 'Report Days', field: 'rpt' },
        { headerName: 'Amount', field: 'Amount'},
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
                        title={props.t("Pathology Test")}
                        breadcrumbItem={props.t("Pathology Test")}
                    />
                    <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end' }}> <button className='btn btn-outline-primary' onClick={handleClickOpen}>
                        <i className="fas fa-bong"></i>&nbsp; Add Pathology Test
                    </button></div>
                    <div className="ag-theme-alpine"
                        style={{ height: 500, marginTop: "20px" }}>
                        <AgGridReact
                            rowData={rowData}
                            columnDefs={columnDefs}
                            defaultColDef={defaultColDef}
                        />
                        <PathologyDialog
                            open={open}
                            handleClose={handleClose}
                        />
                    </div>
                </Container>
            </div>
        </React.Fragment>
    );
};


export default withTranslation()(pathologyTest);