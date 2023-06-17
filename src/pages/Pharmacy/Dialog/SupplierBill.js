import React, { useState, useEffect } from "react"
import Button from "@mui/material/Button"
import Dialog from "@mui/material/Dialog"
import DialogActions from "@mui/material/DialogActions"
import DialogContent from "@mui/material/DialogContent"
import DialogContentText from "@mui/material/DialogContentText"
import DialogTitle from "@mui/material/DialogTitle"
import { Row, Col, Container } from "reactstrap"
import { TextField } from "@material-ui/core"

export default function SupplierbillDialog({    
  open,
  handleClose,
  data,
  onChange,
  handleFormSubmit,
}) {
  var [date, setDate] = useState(new Date())

  useEffect(() => {
    var timer = setInterval(() => setDate(new Date()), 1000)
    return function cleanup() {
      clearInterval(timer)
    }
  })
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle
          id="alert-dialog-title"
          className="bg-primary bg-soft text-primary"
        >
          Bill No
        </DialogTitle>
        <DialogContent className="mt-2">
          <br />

          {/* Render Breadcrumb */}
          <input
            placeholder="search.."
            style={{ width: "60%", height: "30px" }}
          ></input>
          <h4 className="mt-3">Bill No</h4>
          <p
            className="text-dark fw-bold fs-5"
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "flex-end",
            }}
          >
            Purchase Date & Time&nbsp;
            {date.toLocaleTimeString()}
            {date.toLocaleDateString()}
          </p>
          <div className="card">
            <Row>
              <Col lg="12">
                <Row>
                  <Col lg="4" md="4">
                    <label>Medicine Category</label>
                    <br />
                    <select style={{ width: "90%", height: "25px" }} id="medicine_category" value={data.medicine_category} onChange={e=>onChange(e)}>
                      <option>Select</option>
                      <option value="tablet">Tablet</option>
                    </select>
                  </Col>
                  <Col lg="4" md="4">
                    <label>Medicine Name</label>
                    <br />
                    <select style={{ width: "90%", height: "25px" }} id="medicine_name" value={data.medicine_name} onChange={e=>onChange(e)}>
                      <option>Select</option>
                      <option value="Azithromycin">Azithromycin</option>
                    </select>
                  </Col>
                  <Col lg="4" md="4">
                    <label>Batch No</label>
                    <br />
                    <input
                      placeholder=""
                      style={{ width: "90%", height: "25px" }}
                      id="medicine_batch_detail_id"
                      value={data.medicine_batch_detail_id}
                      onChange={e=>onChange(e)}
                      type="number"
                    ></input>
                  </Col>
                </Row>
                <br />
                <Row>
                  <Col lg="4" md="4">
                    <label>Expiry Date</label>
                    <br />
                    <input
                      placeholder=""
                      style={{ width: "90%", height: "25px" }}
                      type="date"
                    ></input>
                  </Col>
                  <Col lg="4" md="4">
                    <label>MRP(₹)</label>
                    <br />
                    <input
                      placeholder=""
                      style={{ width: "90%", height: "25px" }}
                      type="number"
                    ></input>
                  </Col>
                  <Col lg="4" md="4">
                    <label>Batch Amount(₹)</label>
                    <br />
                    <input
                      placeholder=""
                      style={{ width: "90%", height: "25px" }}
                      id="amount"
                      value={data.amount}
                      onChange={e=>onChange(e)}
                      type="number"
                    ></input>
                  </Col>
                </Row>
                <br />

                <Row>
                  <Col lg="4" md="4">
                    <label>Sales Price(₹)</label>
                    <br />
                    <input
                      placeholder=""
                      style={{ width: "90%", height: "25px" }}
                      id="sale_price"
                      value={data.sale_price}
                      onChange={e=>onChange(e)}
                      type="number"
                    ></input>
                  </Col>
                  <Col lg="4" md="4">
                    <label>Packing Qty</label>
                    <br />
                    <input
                      placeholder=""
                      style={{ width: "90%", height: "25px" }}
                      type="number"
                    ></input>
                  </Col>
                  <Col lg="4" md="4">
                    <label>Quantity</label>
                    <br />
                    <input
                      placeholder=""
                      style={{ width: "90%", height: "25px" }}
                      id="quantity"
                      value={data.quantity}
                      onChange={e=>onChange(e)}
                      type="number"
                    ></input>
                  </Col>
                </Row>
                <br />
                <Row>
                  <Col lg='4' md='3'>
                    <label>Bill Basic ID</label>
                    <br />
                    <input id="pharmacy_bill_basic_id" value={data.pharmacy_bill_basic_id} onChange={e=>onChange(e)} style={{ width: "90%", height: "25px" }} type="number"></input>
                  </Col>
                  <Col lg='4' md='3'>
                    <label>Bill No</label>
                    <br />
                    <input id="invoice_no" value={data.invoice_no} onChange={e=>onChange(e)} style={{ width: "90%", height: "25px" }} type="number"></input>
                  </Col>
                  <Col lg="4" md="4">
                    <label>Purchase Price(₹)</label>
                    <br />
                    <input
                      placeholder=""
                      style={{ width: "90%", height: "25px" }}
                      type="number"
                    ></input>
                  </Col>
                </Row>
                <br />
                <Row>
                  
                  <Col lg="4" md="4">
                    <label>Tax</label>
                    <br />
                    <input
                      placeholder="%"
                      style={{ width: "90%", height: "25px" }}
                      id="tax_percentage"
                      onChange={e=>onChange(e)}
                      value={data.tax_percentage}
                      type="number"
                    ></input>
                  </Col>
                  <Col lg="4" md="4">
                    <label>Amount(₹)</label>
                    <br />
                    <input
                      placeholder=""
                      style={{ width: "90%", height: "25px" }}
                      id="net_amount"
                          value={data.net_amount}
                          onChange={e=>onChange(e)}
                          type="number"
                    ></input>
                  </Col>
                </Row>

                <br />
                <br />
                <Row>
                  <Col lg="5">
                    <label>Note</label>
                    <br />
                    <textarea
                      maxLength="infinity"
                      style={{ width: "90%", height: "55px" }}
                    ></textarea>
                    <br />
                    <br />
                    <label>Attach Document</label>
                    <br />
                    <input type="file" style={{ width: "80%" }} id="file" value={data.file} onChange={e=>onChange(e)}></input>
                  </Col>

                  <Col
                    style={{ backgroundColor: "rgba(0,0,0,0.1)" }}
                    className="p-4"
                    lg="6"
                  >
                    <br />
                    <Row className="ms-2">
                      <Col lg="3">
                        <label>Total(₹)</label>
                      </Col>
                      <Col lg="7">
                        <input
                        className="ms-3"
                          style={{
                            border: "none",
                            borderBottom: "1px solid black",
                            width: "100%",
                            textAlign: "end",
                          }}
                          placeholder="0"
                          id="total"
                          value={data.total}
                          onChange={e=>onChange(e)}
                          type="number"
                        ></input>
                      </Col>
                    </Row>
                    <br />
                    <Row className="ms-2">
                      <Col lg="3">
                        <label>Discount(₹)</label>
                      </Col>
                      <Col lg="7">
                        <input
                        className="ms-3"
                          style={{
                            border: "none",
                            borderBottom: "1px solid black",
                            width: "100%",
                            textAlign: "end",
                          }}
                          placeholder="0"
                          id="discount"
                          value={data.discount}
                          onChange={e=>onChange(e)}
                          type="number"
                        ></input>
                      </Col>
                    </Row>
                    <br />
                    <Row className="ms-2">
                      <Col lg="3">
                        <label>Tax(₹)</label>
                      </Col>
                      <Col lg="7">
                        <input
                        className="ms-3"
                          style={{
                            border: "none",
                            borderBottom: "1px solid black",
                            width: "100%",
                            textAlign: "end",
                          }}
                          placeholder="0"
                          id="tax"
                          value={data.tax}
                          onChange={e=>onChange(e)}
                          type="number"
                        ></input>
                      </Col>
                    </Row>
                    <br />
                    <Row className="ms-2">
                      <Col lg="3">
                        <label>Net Amount(₹)</label>
                      </Col>
                      <Col lg="7">
                        <input
                        className="ms-3"
                          style={{
                            border: "none",
                            borderBottom: "1px solid black",
                            width: "100%",
                            textAlign: "end",
                          }}
                          placeholder="0"
                          id="net_amount"
                          value={data.net_amount}
                          onChange={e=>onChange(e)}
                          type="number"
                        ></input>
                      </Col>
                    </Row>
                    <br />
                    <Row></Row>
                      <Row>
                        <Col>
                          <label>Payment Mode</label>
                          <br />
                          <select>
                            <option>Cash</option>
                            <option>UPI</option>
                            <option>Bank Transfer</option>
                            <option>Cheque</option>
                            <option>Online</option>
                          </select>
                        </Col>
                      </Row>
                      <br />
                      <Row>
                        <Col>
                          <label>Payment Amount(₹)</label>
                          <br />
                          <input style={{ width: "65%" }}></input>
                        </Col>
                      </Row>
                    
                    <br />
                    <Row>
                      <Col>
                        <label>Payment Note</label>
                        <br />
                        <textarea
                          style={{ height: "35px", width: "83%" }}
                        ></textarea>
                      </Col>
                    </Row>
                    <div className="mt-4">
                      <button className="btn btn-primary bg-soft">
                        Calculate
                      </button>
                    </div>
                  </Col>
                </Row>
                <br />
                <Row></Row>
              </Col>
            </Row>
            <br />
          </div>
        </DialogContent>
        <DialogActions>
          <button
            className="btn btn-primary"
            onClick={()=>handleFormSubmit(handleClose())}
            autoFocus
          >
            Save
          </button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
