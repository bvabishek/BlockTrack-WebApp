import * as React from "react"
import Button from "@mui/material/Button"
import Dialog from "@mui/material/Dialog"
import DialogActions from "@mui/material/DialogActions"
import DialogContent from "@mui/material/DialogContent"
import DialogContentText from "@mui/material/DialogContentText"
import DialogTitle from "@mui/material/DialogTitle"
import { Row, Col, Label, Input } from "reactstrap"
import { TextField } from "@mui/material"
import TextArea from "antd/es/input/TextArea"

export default function ComplainDialog({
  open,
  handleClose,
  data,
  onChange,
  handleFormSubmit,
}) {
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Add new Complain</DialogTitle>
        <DialogContent>
          <br />
          <Row>
            <Col lg='6' md='6' sm='12'>
              <label>Complain Type</label>
              <br />
              <input
              style={{width: '100%', height: '30px'}}
                id="complaint_type"
                size="small"
                value={data.complaint_type}
                onChange={e => onChange(e)}
              />
            </Col>
            <Col lg='6' md='6' sm='12'>
              <label>Complain By</label>
              <br />
              <input
              style={{width: '100%', height: '30px'}}
                id="complaint_by"
                size="small"
                value={data.complaint_by}
                onChange={e => onChange(e)}
              />
            </Col>
          </Row>
          <br />
          <Row>
            <Col lg='6' md='6' sm='12'>
              <label>Complain Type ID</label>
              <br />
              <input
              style={{width: '100%', height: '30px'}}
                id="complaint_type_id"
                size="small"
                type="text/number"
                value={data.complaint_type_id}
                onChange={e => onChange(e)}
              />
            </Col>
            <Col lg='6' md='6' sm='12'>
              <label>Name</label>
              <br />
              <input
              style={{width: '100%', height: '30px'}}
                id="name"
                size="small"
                value={data.name}
                onChange={e => onChange(e)}
              />
            </Col>
          </Row>
          <br />
          <Row>
            <Col lg='6' md='6' sm='12'>
              <label>Source</label>
              <br />
              <input
              style={{width: '100%', height: '30px'}}
                id="source"
                size="small"
                value={data.source}
                onChange={e => onChange(e)}
              />
            </Col>
            <Col lg='6' md='6' sm='12'>
              <label>Phone</label>
              <br />
              <input
              style={{width: '100%', height: '30px'}}
                id="contact"
                size="small"
                value={data.contact}
                onChange={e => onChange(e)}
              />
            </Col>
          </Row>
          <br />
          <Row>
            <Col lg='6' md='6' sm='12'>
              <label>Description</label>
              <br />
              <input
              style={{width: '100%', height: '30px'}}
                rows={3}
                placeholder="Description"
                id="description"
                value={data.description}
                onChange={e => onChange(e)}
              />
            </Col>
            <Col lg='6' md='6' sm='12'>
              <label>Date</label>
              <br />
              <input
              
                type="date"
                id="date"
                size="small"
                style={{ width: "100%", height: '30px' }}
                value={data.date}
                onChange={e => onChange(e)}
              />
            </Col>
          </Row>
          <br />
          <Row>
            <Col lg='6' md='6' sm='12'>
              <label>Action Taken</label>
              <br />
              <select
                id="action_taken"
                value={data.action_taken}
                onChange={e => onChange(e)}
                style={{ width: "100%", height: '30px' }}
              >
                <option>select</option>
                <option value='Yes'>Yes</option>
                <option value='No'>No</option>
              </select>
            </Col>
            <Col lg='6' md='6' sm='12'>
              <label>Assigned</label>
              <br />
              <input
                type="text"
                size="small"
                id="assigned"
                value={data.assigned}
                onChange={e => onChange(e)}
                style={{ width: "100%", height: '30px' }}
              />
            </Col>
          </Row>
          <br />
          <Row>
            <Col lg='6' md='6' sm='12'>
              <label>Note</label>
              <br />
              <input
                type="text"
                size="small"
                id="note"
                value={data.note}
                onChange={e => onChange(e)}
                style={{ width: "100%", height: '30px' }}
              />
            </Col>
            <Col lg='6' md='6' sm='12'>
              <label>Attach Document</label>
              <br />
              <input
                type="file"
                size="small"
                id="image"
                value={data.image}
                onChange={e => onChange(e)}
                style={{ width: "100%", height: '30px' }}
              />
            </Col>
          </Row>
          <br />
        </DialogContent>
        <DialogActions>
          <button className="btn btn-danger" onClick={handleClose}>
            Cancel
          </button>
          <button
            className="btn btn-primary"
            onClick={() => handleFormSubmit()}
            autoFocus
          >
            Submit
          </button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
