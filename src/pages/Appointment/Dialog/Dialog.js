import * as React from "react"
import Button from "@mui/material/Button"
import Dialog from "@mui/material/Dialog"
import DialogActions from "@mui/material/DialogActions"
import DialogContent from "@mui/material/DialogContent"
import DialogContentText from "@mui/material/DialogContentText"
import DialogTitle from "@mui/material/DialogTitle"
import { TextField } from "@mui/material"

export default function AlertDialog({ open, handleClose, data, onChange, handleFormSubmit }) {
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        >
        <DialogTitle id="alert-dialog-title" className="text-primary" style={{}}>Add Patient Details</DialogTitle>
        <DialogContent style={{marginLeft: "70px"}}>
          <TextField
            id="name"
            placeholder="Enter name"
            label="Name"
            margin="dense"
            variant="outlined"
            value={data.name}
            onChange={e=>onChange(e)}
          />
          <TextField
            id="age"
            placeholder="Enter age"
            label="Age"
            margin="dense"
            variant="outlined"
            value={data.age}
            onChange={e=>onChange(e)}
          />
          <TextField
            id="gender"
            placeholder="Enter gender"
            label="Gender"
            margin="dense"
            variant="outlined"
            value={data.gender}
            onChange={e=>onChange(e)}
          />
          <TextField
            id="contact"
            placeholder="Enter contact"
            label="Contact"
            margin="dense"
            variant="outlined"
            value={data.contact}
            onChange={e=>onChange(e)}
          />
          <TextField
            id="bloodgroup"
            placeholder="Enter blood group"
            label="Blood group"
            margin="dense"
            variant="outlined"
            value={data.bloodgroup}
            onChange={e=>onChange(e)}
          />
          <TextField
            id="Appointmentno"
            placeholder="Enter Appointment no."
            label="Appointment no."
            margin="dense"
            variant="outlined"
            value={data.Appointmentno}
            onChange={e=>onChange(e)}
          />
          <TextField
            id="Appointmentdate"
            placeholder="Enter Appointment Date"
            label="Appointment Date"
            margin="dense"
            variant="outlined"
            value={data.Appointmentdate}
            onChange={e=>onChange(e)}
          />
          <TextField
            id="priority"
            placeholder="Enter Priority"
            label="Priority"
            margin="dense"
            variant="outlined"
            value={data.priority}
            onChange={e=>onChange(e)}
          />
          
        </DialogContent>
        <DialogActions style={{alignItems: 'center', justifyContent:'center'}}>
          <button onClick={handleClose} className="btn btn-danger bg-soft">
            Cancel
          </button>
          <button onClick={()=>handleFormSubmit()} className="btn btn-primary bg-soft">
            Submit
          </button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
