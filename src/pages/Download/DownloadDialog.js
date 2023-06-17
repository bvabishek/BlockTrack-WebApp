import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Row, Col } from "reactstrap";
import { TextField } from "@mui/material";
import TextArea from "antd/es/input/TextArea";

export default function DownloadDialog({ open, handleClose }) {
    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">Add File Details</DialogTitle>
                <DialogContent>
                    <br />
                    <Row>
                        <Col>
                            <TextField label="Content Title" id="content" size="small" />
                        </Col>
                        <Col>
                            <TextField label="Content Type" id="contenttype" size="small" />
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <input
                            id="date"
                            className="form-control date"
                            placeholder
                            type="date"
                            size="small"
                            
                        />
                    </Row>
                    <br />
                    <Row>
                        <label>Content File</label>
                        <TextField id="contentfile" size="small" type="file"/>
                    </Row>
                    <br />
                    <Row>
                        <TextArea 
                            rows={3}
                            placeholder='Description'
                        />
                    </Row>
                </DialogContent>
                <DialogActions>
                    <button className="btn btn-danger" onClick={handleClose}>
                        Cancel
                    </button>
                    <button className="btn btn-primary" onClick={handleClose} autoFocus>
                        Submit
                    </button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
