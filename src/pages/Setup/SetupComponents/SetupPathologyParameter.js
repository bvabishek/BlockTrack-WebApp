import PropTypes from "prop-types"
import React ,{useMemo, useState, useEffect} from "react"
import { Container, Card, CardBody } from "reactstrap"

//i18n
import { withTranslation } from "react-i18next"
import { AgGridReact, AgGridColumn } from "ag-grid-react"
import "ag-grid-community/styles/ag-grid.css"
import "ag-grid-community/styles/ag-theme-alpine.css"
//redux
import SetupPathologyParameterDialog from "../SetupDialog/SetupPathologyParameterDialog"
import api from "services/Api"

function SetupPathology(){
const [openParamDiaolog, setOpenParamDialog] = useState(false);

const rowData = [
    {category: 'New Category'}
]

  const columnDefs = [
    {headerName: 'Category Name', field: 'category'},
  ]

  const defaultColDef = useMemo(
    () => ({
      sortable: true,
      filter: true,
      flex: 1,
    }),
    []
  )

  const handleOpenParamDialog = () => {
    setOpenParamDialog(true);
  }

  const handleCloseParamDialog = () => {
    setOpenParamDialog(false);
  }

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <h4>Pathology Category List</h4>
          <Card>
            <CardBody>
            <div className="d-flex justify-content-end">
                <button className="btn btn-primary bg-soft" onClick={handleOpenParamDialog}><i className="fa fa-plus"></i>&nbsp; Add Pathology Category</button>
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
                <SetupPathologyParameterDialog open={openParamDiaolog} handleClose={handleCloseParamDialog}/>
                </div>
            </CardBody>
          </Card>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default withTranslation()(SetupPathology)
