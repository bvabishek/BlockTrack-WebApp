import PropTypes from "prop-types"
import React ,{useMemo, useState} from "react"
import { Container, Card, CardBody } from "reactstrap"

//i18n
import { withTranslation } from "react-i18next"
import { AgGridReact, AgGridColumn } from "ag-grid-react"
import "ag-grid-community/styles/ag-grid.css"
import "ag-grid-community/styles/ag-theme-alpine.css"
//redux
import SetupBedListDialog from "../SetupDialog/SetupBedDialog"

const SetupBedList = props => {

    const [openSetupBedDialog, setOpenSetupBedDialog] = useState()

  const rowData = [
    {name: 'GS-101', type: 'Standard', group: 'VIP Ward', used: 'true'},
    {name: 'GS-101', type: 'Standard', group: 'VIP Ward', used: 'true'}
  ]

  const columnDefs = [
    { headerName: "Name", field: "name" },
    { headerName: "Bed Type", field: "type" },
    { headerName: "Bed Group", field: "group" },
    {
      headerName: "Used",
      field: "used",
      cellRendererFramework: (props) => (
        <input type="checkbox" checked={props.value} />
      ),
    },
    { headerName: "Action", field: "action" },
  ];
  
  

  const defaultColDef = useMemo(
    () => ({
      sortable: true,
      filter: true,
      flex: 1,
    }),
    []
  )

  const handleOpenBedDialog = () => {
    setOpenSetupBedDialog(true);
  }

  const handleCloseBedDialog = () => {
    setOpenSetupBedDialog(false);
  }

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <h4>Bed List</h4>
          <Card>
            <CardBody>
            <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                <button className="btn btn-primary bg-soft" onClick={handleOpenBedDialog}><i className="fa fa-plus"></i>&nbsp; Add Bed</button>
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
                <SetupBedListDialog open={openSetupBedDialog} handleClose={handleCloseBedDialog}/>
                </div>
            </CardBody>
          </Card>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default withTranslation()(SetupBedList)
