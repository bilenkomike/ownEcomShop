import React from "react";
import {
  StatusOrderStyled,
  StatusOrderStyledStatusBar,
  StatusOrderStyledTable,
} from "./StatusOrder.styled";

const StatusOrder = () => {
  return (
    <StatusOrderStyled>
      <StatusOrderStyledTable>
        <thead>
          <tr>
            <th>Status</th>
            <th>Location</th>
            <th>Date</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          <tr className="active">
            <td>Order Placed</td>
            <td>New York, USA</td>
            <td>August 29, 2020</td>
            <td>2:00 pm</td>
          </tr>

          <tr className="active">
            <td>Documentation Prepared</td>
            <td>New York, USA</td>
            <td>August 29, 2020</td>
            <td>3:30 pm</td>
          </tr>

          <tr className="active">
            <td>Booking Arranged</td>
            <td>New York, USA</td>
            <td>August 29, 2020</td>
            <td>3:35 pm</td>
          </tr>
          <tr className="active">
            <td>Collected</td>
            <td>New York, USA</td>
            <td>August 29, 2020</td>
            <td>4:00 pm</td>
          </tr>
          <tr className="active">
            <td>In Transit to Destination</td>
            <td>New York, USA</td>
            <td>August 29, 2020</td>
            <td>6:00 pm</td>
          </tr>

          <tr>
            <td>Arrived at Destination</td>
            <td>London, United Kingdom</td>
            <td></td>
            <td> </td>
          </tr>
          <tr>
            <td>Out for Delivery</td>
            <td>London, United Kingdom</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Delivered</td>
            <td>London, United Kingdom</td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </StatusOrderStyledTable>
      <StatusOrderStyledStatusBar>
        <div className="active"></div>
        <span className="active"></span>

        <div className="active"></div>
        <span className="active"></span>

        <div className="active"></div>
        <span className="active"></span>

        <div className="active"></div>
        <span className="active"></span>

        <div className="active"></div>
        <span className="active"></span>

        <div></div>
        <span></span>

        <div></div>
        <span></span>

        <div></div>
      </StatusOrderStyledStatusBar>
    </StatusOrderStyled>
  );
};

export default StatusOrder;
