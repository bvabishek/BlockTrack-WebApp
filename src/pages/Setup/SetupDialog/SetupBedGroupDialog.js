import * as React from "react"
import Dialog from "@mui/material/Dialog"
import DialogActions from "@mui/material/DialogActions"
import DialogContent from "@mui/material/DialogContent"
import DialogTitle from "@mui/material/DialogTitle"
import { Row, Col, Container, Label, Input } from "reactstrap"
import { TextField } from "@material-ui/core"
import TextareaAutosize from "@mui/base/TextareaAutosize"
import PatientDialog from "pages/Appointment/Dialog/PatientDialog"

export default function SetupBedGroupDialog({
  open,
  handleClose,
  data,
  onChange,
  handleFormSubmit,
}) {
  const [openSetupBedgroupDialog, setOpenSetupBedgroupDialog] = React.useState(false)

  const handleClickOpen = () => {
    //dialog open
    setOpenSetupBedgroupDialog(true)
  }

  const handleDialogClose = () => {
    //dialog close
    setOpenSetupBedgroupDialog(false)
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
        Add Bed Group
        </DialogTitle>
        <DialogContent className="mt-4 ms-2">   
        <Row className="p-2">
            <label>Name<span style={{color: 'red'}}>*</span></label>
            <br />
            <input type="text" style={{height: '30px'}}></input>
        </Row>
        <br />
        <Row className="p-2">
            <label>Floor</label>
            <br />
            <select  style={{height: '30px'}}>
                <option>select</option>
                <option>4th Floor</option>
                <option>3rd Floor</option>
                <option>2nd Floor</option>
                <option>1st Floor</option>
                <option>Ground Floor</option>
            </select>
        </Row>
        <br />
        <Row className="p-2">
            <label>Color</label>
            <br />
            <input type="color"  style={{height: '30px'}}></input>

        </Row>
        <br />
        <Row className="p-2">
            <label>Description</label>
            <br />
            <textarea style={{height: '50px'}}></textarea>
        </Row>
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
