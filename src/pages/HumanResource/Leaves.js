import PropTypes from "prop-types"
import React from "react"
import { Container, Row, Col, Card, CardBody} from "reactstrap"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

//i18n
import { withTranslation } from "react-i18next"
import { Link } from "react-router-dom"
import "ag-grid-community/styles/ag-grid.css"
import "ag-grid-community/styles/ag-theme-alpine.css"
import { AgGridReact } from "ag-grid-react"
import { useMemo } from "react"

//redux

const Leaves = props => {
  const rowData = [
    {
      staff: "Super Admin",
      type: "Sick Leave",
      date: "18/04/2023",
      days: "3",
      appdate: "14/04/2023",
      status: "Approved",
      action: "",
    },
  ]

  const columnDefs = [
    { headerName: "Staff", field: "staff" },
    { headerName: "Leave Type", field: "type" },
    { headerName: "Leave Date", field: "date" },
    { headerName: "Days", field: "days" },
    { headerName: "Apply Date", field: "appdate" },
    { headerName: "Status", field: "status" },
    { headerName: "Action", field: "action" },
  ]

  const defaultColDef = useMemo(
    () => ({
      sortable: true,
      filter: true,
      flex: 1,
    }),
    []
  )
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
        <h4>My Leaves</h4>
        <div style={{display: 'flex', justifyContent: 'flex-end'}}>
            <button className="btn btn-primary" style={{marginRight: '10px'}}>+&nbsp;Apply Leave</button>
            <button className="btn btn-primary"><i className="fas fa-bars"></i>&nbsp;Approve Leave Request</button>
        </div>
        <div className="ag-theme-alpine mt-4"
            style={{ height: 100 }}>
            <AgGridReact
              rowData={rowData}
              columnDefs={columnDefs}
              defaultColDef={defaultColDef}
            />
          </div>
        </Container>
       </div>
    </React.Fragment>
  )
}

export default withTranslation()(Leaves)
