import React from "react";
import "./UserAttendance.css"; // Import the CSS file

const UserExam = ({ data }) => {
  const {
    email,
    mobile,
    fullname,
    permanentAddress,
    course,
    department,
    exam,
  } = data;

  if (!exam) {
    return <div>Loading...</div>;
  }

  return (
    <div className="user-attendance-container">
      <h2>User Information and Exam</h2>
      <table className="user-attendance-table">
        <thead>
          <tr>
            <th>Full Name</th>

            <th>Course</th>
            <th>Department</th>
            <th>ExamId</th>
            <th>Web_technology</th>
            <th>Software_Engineer</th>
            <th>Computer_graphics</th>
            <th>Big_data_analytics</th>
            <th>AI</th>
          </tr>
        </thead>
        <tbody>
          {exam.length === 0 ? (
            <tr>
              <td colSpan="15" style={{ color: "red" }}>
                Exam details are not entered
              </td>
            </tr>
          ) : (
            exam.map((record, index) => (
              <tr key={index}>
                <td>{fullname}</td>

                <td>{course}</td>
                <td>{department}</td>
                <td>{record._id}</td>
                <td>{record.Web_technology}</td>
                <td>{record.Software_Engineer}</td>
                <td>{record.Computer_graphics}</td>
                <td>{record.Big_data_analytics}</td>
                <td>{record.Artificial_intelligence}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UserExam;
