import * as React from "react"
import Dialog from "@mui/material/Dialog"
import DialogActions from "@mui/material/DialogActions"
import DialogContent from "@mui/material/DialogContent"
import DialogTitle from "@mui/material/DialogTitle"
import { Row, Col, Container, Label, Input } from "reactstrap"
import { TextField } from "@material-ui/core"
import TextareaAutosize from "@mui/base/TextareaAutosize"
import PatientDialog from "pages/Appointment/Dialog/PatientDialog"

export default function SetupBedListDialog({
  open,
  handleClose,
  data,
  onChange,
  handleFormSubmit,
}) {
  const [openSetupBedDialog, setOpenSetupBedDialog] = React.useState(false)

  const handleClickOpen = () => {
    //dialog open
    setOpenSetupBedDialog(true)
  }

  const handleDialogClose = () => {
    //dialog close
    setOpenSetupBedDialog(false)
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
        <DialogTitle id="alert-dialog-title" className="bg-primary bg-soft text-primary">
        Add Products
        </DialogTitle>
        <DialogContent className="mt-4 ms-2">   
        <Row className="p-2">
        <Label>Name</Label>
            <input
            type="text"
            style={{height: '30px'}}
            >
            </input>
        </Row>
        <br />
        <Row className="p-2">
        <label>Bed Type</label>
        <br />
            <select style={{height: '30px'}}>
                <option>select</option>
                <option>Standard</option>
                <option>VIP</option>
                <option>Normal</option>
            </select>
        </Row>
        <br />
        <Row className="p-2">
        <label>Bed Group</label>
        <br />
            <select style={{height: '30px'}}>
                <option>select</option>
                <option>VIP Ward - Ground Floor</option>
                <option>Private Ward - 3rd Floor</option>
                <option>General Ward Male - 3rd Floor</option>
                <option>ICU - 2nd Floor</option>
                <option>NICU - 2nd Floor</option>
                <option>AC - 1st Floor</option>
                <option>Non AC - 4th Floor</option>
            </select>
        </Row>
        <br />
        <input type="checkbox"></input>
        &nbsp; <label>Mark as unused</label>
        </DialogContent>
        <DialogActions>
          <button className="btn btn-primary bg-soft btn-md" onClick={handleClose} style={{marginRight: '3%'}}>
            Save
          </button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
