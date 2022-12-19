import React from "react";
import { Table } from "reactstrap";

const userInfo = () => {
  return (
    <div>
      <div className="table-responsive">
        <Table className="table-nowrap mb-0">
          <tbody>
            <tr>
              <th scope="row">Father Name :</th>
              <td></td>
            </tr>
            <tr>
              <th scope="row">Mother Name :</th>
              <td></td>
            </tr>
            <tr>
              <th scope="row">Gender :</th>
              <td></td>
            </tr>
            <tr>
              <th scope="row">E-mail :</th>
              <td></td>
            </tr>
            <tr>
              <th scope="row">Date of birth :</th>
              <td></td>
            </tr>
            <tr>
              <th scope="row">Blood Group :</th>
              <td></td>
            </tr>
            <tr>
              <th scope="row">PAN Number :</th>
              <td></td>
            </tr>
            <tr>
              <th scope="row">Work Experience :</th>
              <td></td>
            </tr>
            <tr>
              <th scope="row">Qualification :</th>
              <td></td>
            </tr>
            <tr>
              <th scope="row">Work type :</th>
              <td></td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  )
}

export default userInfo;
