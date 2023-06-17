import PropTypes from "prop-types"
import React, { useState , useMemo  } from "react"
import { Container, Card, CardBody } from "reactstrap"
import { AgGridReact, AgGridColumn } from "ag-grid-react"
import "ag-grid-community/styles/ag-grid.css"
import "ag-grid-community/styles/ag-theme-alpine.css"
//i18n
import { withTranslation } from "react-i18next"
import TpaDialog from "./TpaDialog/TpaDialog"

//redux

const Tpa = props => {

const [openTpa, setOpenTpa] = useState();

  const rowData = [
    {
      name: "NHIF",
      code: "101",
      phone: "9348934891",
      address: "Mumbai",
      contactname: "Albert",
      contactphone: "7474637321",
    },
  ]

  const columnDefs = [
    { headerName: "Name", field: "name" },
    { headerName: "Code", field: "code" },
    { headerName: "Phone", field: "phone" },
    { headerName: "Address", field: "address" },
    { headerName: "Contact Person Name", field: "contactname" },
    { headerName: "Contact Person Phone", field: "contactphone" },
  ]

  const defaultColDef = useMemo(
    () => ({
      sortable: true,
      filter: true,
      flex: 1,
    }),
    []
  )

  const handleOpenTpa = () => {
    setOpenTpa(true);
  }

  const handleCloseTpa = () => {
    setOpenTpa(false);
  }

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <h4>TPA Management</h4>
          <Card>
            <CardBody>
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <button className="btn btn-primary bg-soft" onClick={handleOpenTpa}>
                  <i className="fa fa-plus"></i>&nbsp; Add TPA
                </button>
              </div>
              <div
                className="ag-theme-alpine"
                style={{ height: 500, marginTop: "20px" }}
              >
                <AgGridReact rowData={rowData}
                    columnDefs={columnDefs}
                    defaultColDef={defaultColDef}
                />
                <TpaDialog open={openTpa} handleClose={handleCloseTpa}/>
              </div>
            </CardBody>
          </Card>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default withTranslation()(Tpa)
