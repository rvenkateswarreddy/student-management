import React from "react";
import "./UserAttendance.css"; // Import the CSS file

const UserAttendance = ({ data }) => {
  const {
    email,
    mobile,
    fullname,
    permanentAddress,
    course,
    department,
    attendance,
  } = data;

  if (!attendance) {
    return <div>Loading...</div>;
  }

  return (
    <div className="user-attendance-container">
      <h2>User Information and Attendance</h2>
      <table className="user-attendance-table">
        <thead>
          <tr>
            <th>Email</th>
            <th>Mobile</th>
            <th>Full Name</th>
            <th>Permanent Address</th>
            <th>Course</th>
            <th>Department</th>
            <th>Date</th>
            <th>Presence</th>
            <th>Attendance Id</th>
          </tr>
        </thead>
        <tbody>
          {attendance.length === 0 ? (
            <tr>
              <td colSpan="9" style={{ color: "red" }}>
                Attendance details are not entered
              </td>
            </tr>
          ) : (
            attendance.map((record, index) => (
              <tr key={index}>
                <td>{email}</td>
                <td>{mobile}</td>
                <td>{fullname}</td>
                <td>{permanentAddress}</td>
                <td>{course}</td>
                <td>{department}</td>
                <td>
                  {new Date(record.date).toLocaleString("en-IN", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit",
                  })}
                </td>
                <td>{record.isPresent ? "Present" : "Absent"}</td>
                <td>{record._id}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UserAttendance;
