import PropTypes from "prop-types"
import React, { useMemo , useState, useEffect} from "react"
import { Card, CardBody, Col, Container, Row } from "reactstrap"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

//i18n
import { withTranslation } from "react-i18next"

import { AgGridReact, AgGridColumn } from "ag-grid-react"
import "ag-grid-community/styles/ag-grid.css"
import "ag-grid-community/styles/ag-theme-alpine.css"
import api from "services/Api"

//redux

const Ipdreport = props => {

  const [tableData, setTableData] = useState(null)
  const [doctors, setDoctors] = useState([])

  useEffect(() => {
    // getUsers from json
    getIpdDischargedReports()
    getAllDoctors()
  }, [])

  const getIpdDischargedReports = () => {
    api.getIpdDischargedReport().then(res => setTableData(res.data))
    api.http
  }

  const columnDefs = [
    { headerName: "Patient Name", field: "patient_name" },
    { headerName: "IPD No", field: "id" },
    { headerName: "Case ID", field: "case_reference_id" },
    { headerName: "Gender", field: "gender" },
    { headerName: "Phone", field: "mobileno" },
    { headerName: "Consutant", field: "cons_doctor" },
    { headerName: "Bed", field: "bed" },
    { headerName: "Admission Date", field: "date" },
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

  const getAllDoctors = async () => {
    const response = await api.getDoctor()
    const { data } = response
    console.log(data, "doccccccccccccccc")
    setDoctors(data)
  }

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <h4>IPD Discharged Patient Report</h4>
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
                    <option>select one</option>
                    {doctors &&
                doctors.map(doctor => (
                  <option key={doctor.staff_id} value={doctor.staff_id}>
                    {doctor.name}
                  </option>
                ))}
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
                  rowData={tableData}
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

export default withTranslation()(Ipdreport)
