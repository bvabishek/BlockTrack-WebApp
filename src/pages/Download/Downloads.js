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
import DownloadDialog from "./DownloadDialog";

//redux

const Downloads = props => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    const rowData = [
        { content: 'Medical conference', ftype: 'PDF', date: '07/01', desc: 'A conference about medicines' },
        { content: 'Medical conference', ftype: 'PDF', date: '07/01', desc: 'A conference about medicines' },
        { content: 'Medical conference', ftype: 'PDF', date: '07/01', desc: 'A conference about medicines' },
        { content: 'Medical conference', ftype: 'PDF', date: '07/01', desc: 'A conference about medicines' },
        { content: 'Medical conference', ftype: 'PDF', date: '07/01', desc: 'A conference about medicines' },
    ];

    const columnDefs = [
        { headerName: 'Content Title', field: 'content' },
        { headerName: 'file type', field: 'ftype' },
        { headerName: 'Date', field: 'date' },
        { headerName: 'Description', field: 'desc' },
        {
            headerName: "Actions", field: "id", cellRendererFramework: (params) => <div>
                <button className="btn btn-danger btn-sm" onClick={() => handleDelete(params.value)}>
                    Delete
                </button>
            </div>
        }
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
                        title={props.t("Download Center")}
                        breadcrumbItem={props.t("Downloads")}
                    />
                    <div style={{display:'flex',justifyContent: 'flex-end', alignItems: 'flex-end'}}>
                        <button className="btn btn-primary" onClick={handleClickOpen}>Add File</button>
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
                    <DownloadDialog 
                        open={open}
                        handleClose={handleClose}
                    />
                </Container>
            </div>
        </React.Fragment>
    );
};

export default withTranslation()(Downloads);
