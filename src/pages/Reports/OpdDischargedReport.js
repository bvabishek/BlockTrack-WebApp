import PropTypes from "prop-types"
import React, { useMemo , useState} from "react"
import { Card, CardBody, Col, Container, Row } from "reactstrap"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

//i18n
import { withTranslation } from "react-i18next"

import { AgGridReact, AgGridColumn } from "ag-grid-react"
import "ag-grid-community/styles/ag-grid.css"
import "ag-grid-community/styles/ag-theme-alpine.css"

//redux

const Opdreport = props => {
  

  const rowData = [
    {
      pname: "abishek",
      opno: "101",
      caseid: "cs123",
      gender: "male",
      phone: "9962313564",
      consultant: "yyy",
      bed: "123",
      admdate: "14/04",
      disdate: "15/04",
      disstatus: "dis",
      total: "2",
    },
    {
        pname: "venkat",
        opno: "101",
        caseid: "cs123",
        gender: "male",
        phone: "9962313564",
        consultant: "yyy",
        bed: "123",
        admdate: "14/04",
        disdate: "15/04",
        disstatus: "dis",
        total: "2",
      },
      {
        pname: "akhil",
        opno: "101",
        caseid: "cs123",
        gender: "male",
        phone: "9962313564",
        consultant: "yyy",
        bed: "123",
        admdate: "14/04",
        disdate: "15/04",
        disstatus: "dis",
        total: "2",
      },
  ]

  const columnDefs = [
    { headerName: "Patient Name", field: "pname" },
    { headerName: "OPD No", field: "opno" },
    { headerName: "Case ID", field: "caseid" },
    { headerName: "Gender", field: "gender" },
    { headerName: "Phone", field: "phone" },
    { headerName: "Consutant", field: "consultant" },
    { headerName: "Bed", field: "bed" },
    { headerName: "Admission Date", field: "admdate" },
    { headerName: "Discharged Date", field: "disdate" },
    { headerName: "Discharge Status", field: "disstatus" },
    { headerName: "Total Admit Days", field: "total" },
  ]

  const defaultColDef = useMemo(
    () => ({
      sortable: true,
      filter: true,
      flex: 1,
    }),
    []
  )

  const [searchText, setSearchText] = useState("")

  const [gridApi, setGridApi] = useState(null);
  const onGridReady = params => {
      setGridApi(params.api);
  };

  const onQuickFilterText = event => {
      gridApi.setQuickFilter(event.target.value);
  };

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <h4>OPD Discharged Patient Report</h4>
          <Card>
            <CardBody>
              <Row>
                <Col lg="3" sm="12">
                  <label>Time Duration</label>
                  <br />
                  <select style={{ width: "100%", height: "30px" }}>
                    <option>Today</option>
                    <option>This week</option>
                    <option>Last week</option>
                    <option>This Month</option>
                    <option>Last Month</option>
                    <option>Last 3 Months</option>
                    <option>Last 6 Months</option>
                    <option>Last 12 Months</option>
                    <option>This Year</option>
                    <option>Last Year</option>
                  </select>
                </Col>
                <Col lg="3" sm="12">
                  <label>Doctor</label>
                  <br />
                  <select style={{ width: "100%", height: "30px" }}>
                    <option>select</option>
                  </select>
                </Col>
                <Col lg="3" sm="12">
                  <label>From Age</label>
                  <br />
                  <select style={{ width: "100%", height: "30px" }}>
                    <option>select</option>
                  </select>
                </Col>
                <Col lg="3" sm="12">
                  <label>To Age</label>
                  <br />
                  <select style={{ width: "100%", height: "30px" }}>
                    <option>select</option>
                  </select>
                </Col>
              </Row>
              <br />
              <Row>
                <Col lg="3" sm="12">
                  <label>Gender</label>
                  <br />
                  <select style={{ width: "100%", height: "30px" }}>
                    <option>select</option>
                  </select>
                </Col>
                <Col lg="3" sm="12">
                  <label>Discharge Status</label>
                  <br />
                  <select style={{ width: "100%", height: "30px" }}>
                    <option>select</option>
                  </select>
                </Col>
              </Row>
              <br />
              <div style={{display: 'flex', justifyContent: 'flex-end'}}>
              <button className="btn btn-primary"><i className="fas fa-search"></i>&nbsp;Search</button>
              </div>
              

              <br />

              <div className="ag-theme-alpine mt-2" style={{ height: 400 }}>
                <AgGridReact
                  rowData={rowData}
                  columnDefs={columnDefs}
                  defaultColDef={defaultColDef}
                />
              </div>
            </CardBody>
          </Card>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default withTranslation()(Opdreport)
