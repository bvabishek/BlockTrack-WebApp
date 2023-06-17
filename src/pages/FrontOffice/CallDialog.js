import * as React from "react"
import Button from "@mui/material/Button"
import Dialog from "@mui/material/Dialog"
import DialogActions from "@mui/material/DialogActions"
import DialogContent from "@mui/material/DialogContent"
import DialogContentText from "@mui/material/DialogContentText"
import DialogTitle from "@mui/material/DialogTitle"
import { Row, Col, Input, Label } from "reactstrap"
import { TextField } from "@mui/material"
import TextArea from "antd/es/input/TextArea"
import { TextareaAutosize } from "@mui/material"
import { Select } from "antd"
import { size } from "lodash"

export default function CallDialog({
  open,
  handleClose,
  data,
  onChange,
  handleFormSubmit,
}) {
  // const [callType, setCallType] = React.useState(null);

  // console.log(callType,"typeeeeeeeee")

  // const optionCallType = [
  //     {
  //         label: "Call-type",

  //         options: [
  //             { label: "Incoming", value: "Incoming" },
  //             { label: "Outgoing", value: "Outgoing" },
  //         ],

  //     },
  // ];

  // const handleCallTypeChange = (event) => {
  //     const selectedValue = event.target.value;
  //     console.log(selectedValue,"kkkkkkkkkkk"); // check if the selected value is captured correctly
  //     setCallType(selectedValue);
  //   };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Add Call Log</DialogTitle>
        <DialogContent>
          <br />
          <Row>
            <Col>
              <Label>Name</Label>
              <br />
              <input
                id="name"
                size="small"
                value={data.name}
                onChange={e => onChange(e)}
                style={{ width: "100%", height: "30px" }}
              />
            </Col>
            <Col>
              <Label>Phone</Label>
              <br />
              <input
                id="contact"
                size="small"
                value={data.contact}
                onChange={e => onChange(e)}
                style={{ width: "100%", height: "30px" }}
              />
            </Col>
          </Row>
          <br />
          <Row>
            <Col>
              <Label>Date</Label>
              <br />
              <input
                type="date"
                id="date"
                size="small"
                value={data.date}
                onChange={e => onChange(e)}
                style={{ width: "100%", height: "30px" }}
              />
            </Col>
            <Col>
              <Label>Description</Label>
              <br />
              <textarea
                placeholder="Description"
                id="description"
                style={{ width: "100%", height: "30px" }}
                value={data.description}
                onChange={e => onChange(e)}
              />
            </Col>
          </Row>
          <br />
          <Row>
            <Col>
              <Label>Follow Up Date</Label>
              <br />
              <input
                type="date"
                id="follow_up_date"
                size="small"
                value={data.follow_up_date}
                onChange={e => onChange(e)}
                style={{ width: "100%", height: "30px" }}
              />
            </Col>
            <Col>
              <Label>Duration</Label>
              <br />
              <input
                label="Duration"
                id="call_duration"
                size="small"
                value={data.call_duration}
                onChange={e => onChange(e)}
                type="number"
                style={{ width: "100%", height: "30px" }}
              />
            </Col>
          </Row>

          <br />
          <Row>
            <Col>
              <Label>Note</Label>
              <br />
              <textarea
                placeholder="Note"
                id="note"
                style={{ width: "100%", height: "30px" }}
                value={data.note}
                onChange={e => onChange(e)}
              />
            </Col>
            <Col>
            &nbsp;&nbsp;
            <Label>Call Type</Label>
              <select
              label="Call Type"
              id="call_type"
                value={data.call_type}
                onChange={e => onChange(e)}
                style={{ width: "100%", height: "30px" }}
              >
              <option>select</option>
                <option value="Incoming">Incoming</option>
                <option value="outgoing">Outgoing</option>
              </select>
              {/* { console.log(callType,"typeeeeeeeeesss")}

                             <select value={callType}
                               onChange={(event) => handleCallTypeChange(event)}  style={{ width: '140px' }}>
                                <option  value="Incoming">Incoming</option>
                                <option value="Outgoing">Outgoing</option>
                            

                            </select> */}
              {/* <select
                                onChange={(e) => setCallType(e.target.value)}  style={{ width: '140px' }}>
                                <option value={data.incoming}>Incoming</option>
                                <option value={data.outgoing}>Outgoing</option>
                            
                            </select>  */}
            </Col>
          </Row>
          <br />
          <Row>
            <Col>
            <Label>Created At</Label>
            <br />
              <input
                label="Created At"
                type="datetime-local"
                id="created_at"
                value={data.created_at}
                onChange={e => onChange(e)}
                style={{ width: "100%", height: "30px" }}
              ></input>
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
