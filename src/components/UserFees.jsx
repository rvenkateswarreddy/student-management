import React, { useState, useEffect } from "react";
import "./UserAttendance.css"; // Import the CSS file

const UserFees = ({ data }) => {
  const {
    email,
    mobile,
    fullname,
    permanentAddress,
    course,
    department,
    fees,
  } = data;

  if (!fees) {
    return <div>Loading...</div>;
  }

  // State variable to keep track of cumulative fee due
  const [cumulativeFeeDue, setCumulativeFeeDue] = useState(52000);

  useEffect(() => {
    // Calculate the cumulative fee due when fees change
    let tempFeeDue = 52000;
    fees.forEach((fee, index) => {
      // Subtract fee amount from cumulative fee due
      tempFeeDue -= fee.feeAmount;

      // Adjust cumulative fee due for subsequent iterations
      if (index !== 0) {
        tempFeeDue += fees[index - 1].feeAmount;
      }
    });
    setCumulativeFeeDue(tempFeeDue);
  }, [fees]);

  return (
    <div className="user-attendance-container">
      <h2>User Information and Fees</h2>
      <table className="user-attendance-table">
        <thead>
          <tr>
            <th>Email</th>
            <th>Mobile</th>
            <th>Full Name</th>
            <th>Permanent Address</th>
            <th>Course</th>
            <th>Department</th>
            <th>Fee Amount</th>
            <th>Fee Due</th>
            <th>Payment Date</th>
            <th>Fees Id</th>
          </tr>
        </thead>
        <tbody>
          {fees.length === 0 ? (
            <tr>
              <td colSpan="9" style={{ color: "red" }}>
                Fees details are not entered
              </td>
            </tr>
          ) : (
            fees.map((record, index) => {
              // Calculate the fee due for the current fee record
              const feeDue =
                index === 0
                  ? cumulativeFeeDue
                  : cumulativeFeeDue - record.feeAmount;

              return (
                <tr key={index}>
                  <td>{email}</td>
                  <td>{mobile}</td>
                  <td>{fullname}</td>
                  <td>{permanentAddress}</td>
                  <td>{course}</td>
                  <td>{department}</td>
                  <td>{5200 - record.feeAmount}</td>
                  <td>{feeDue}</td>
                  <td>
                    {new Date(record.paymentDate).toLocaleString("en-IN", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                      second: "2-digit",
                    })}
                  </td>
                  <td>{record._id}</td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UserFees;
