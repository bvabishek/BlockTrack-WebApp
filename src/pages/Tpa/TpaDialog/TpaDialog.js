import * as React from "react"
import Dialog from "@mui/material/Dialog"
import DialogActions from "@mui/material/DialogActions"
import DialogContent from "@mui/material/DialogContent"
import DialogTitle from "@mui/material/DialogTitle"
import { Row, Col, Container, label, Input } from "reactstrap"
import { TextField } from "@material-ui/core"
import TextareaAutosize from "@mui/base/TextareaAutosize"
import PatientDialog from "pages/Appointment/Dialog/PatientDialog"

export default function TpaDialog({
  open,
  handleClose,
  data,
  onChange,
  handleFormSubmit,
}) {
  const [openTpaDialog, setOpenTpaDialog] = React.useState(false)

  const handleClickOpen = () => {
    //dialog open
    setOpenTpaDialog(true)
  }

  const handleDialogClose = () => {
    //dialog close
    setOpenTpaDialog(false)
  }

  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "flex-end",
      }}
    >
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth="lg"
      >
        <DialogTitle
          id="alert-dialog-title"
          className="bg-primary bg-soft text-primary"
        >
          Add TPA
        </DialogTitle>
        <DialogContent className="mt-4 ms-2">
          <Row className="p-2">
            <label>Name</label>
            <br />
            <input type="text" placeholder=""></input>
          </Row>
          
          <Row className="p-2">
            <label>Code</label>
            <br />
            <input type="text" placeholder=""></input>
          </Row>
         
          <Row className="p-2">
            <label>Contact No</label>
            <br />
            <input type="text" placeholder=""></input>
          </Row>
         
          <Row className="p-2">
            <label>Address</label>
            <br />
            <input type="text" placeholder=""></input>
          </Row>
          
          <Row className="p-2">
            <label>Contact Person Name</label>
            <br />
            <input type="text" placeholder=""></input>
          </Row>
         
          <Row className="p-2">
            <label>Contact Person Phone</label>
            <br />
            <input type="text" placeholder=""></input>
          </Row>
        </DialogContent>
        <DialogActions>
          <button
            className="btn btn-primary bg-soft btn-md"
            onClick={handleClose}
            style={{ marginRight: "3%" }}
          >
            Save
          </button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
