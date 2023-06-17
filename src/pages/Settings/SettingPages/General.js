import React from "react";
import { Row, Col, Card, CardBody } from "reactstrap";

function General() {
  return (
    <React.Fragment>
      <div className="page-content">
        <Row>
          <Col xl={6}>
            <Card>
              <CardBody>
                <h4>General Settings</h4>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </React.Fragment>
  )
}

export default General;
