import React, { useState } from "react";
import axios from "axios";
import "./StudentDetails.css";

function StudentDetails() {
  const [regNo, setRegNo] = useState("");
  const [studentDetails, setStudentDetails] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://student-management-qr9p.onrender.com/allprofiles/${regNo}`,
        {
          headers: {
            "x-token": localStorage.getItem("token"),
          },
        }
      );
      setStudentDetails(response.data.user);
      setError("");
    } catch (error) {
      setError("Student not found");
      setStudentDetails(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="studentwholecontainer">
      <h2>Search Student Details</h2>
      <input
        type="text"
        placeholder="Enter Hall ticket Number"
        value={regNo}
        onChange={(e) => setRegNo(e.target.value)}
      />
      <button className="btnsearch" onClick={handleSearch}>
        Search
      </button>

      {error && <p className="errorloading">{error}</p>}

      {loading && <p className="studentloading">Loading...</p>}

      {studentDetails !== null && (
        <div className="studentcardcontainer2">
          <div className="card_student">
            <h3>Student Details</h3>
            <p>Name: {studentDetails.fullname}</p>
            <p>Email: {studentDetails.email}</p>
            <p>Mobile: {studentDetails.mobile}</p>
            <p>Gender: {studentDetails.gender}</p>
            <p>Permanent Address: {studentDetails.permanentAddress}</p>
            <p>Course: {studentDetails.course}</p>
            <p>Department: {studentDetails.department}</p>
            <p>Hostel Block: {studentDetails.hostelblock}</p>
            <p>Room No: {studentDetails.roomno}</p>
            <p>Year of Study: {studentDetails.yearOfStudy}</p>
          </div>

          <div className="card_student">
            <h3>Exam Details</h3>
            <p>
              Web Technology: {studentDetails.exam.fixedSubjects.Web_technology}
            </p>
            <p>
              Software Engineer:{" "}
              {studentDetails.exam.fixedSubjects.Software_Engineer}
            </p>
            <p>
              Computer Graphics:{" "}
              {studentDetails.exam.fixedSubjects.Computer_graphics}
            </p>

            <p>
              {studentDetails.exam.selectableSubjects.list1.type}:{" "}
              {studentDetails.exam.selectableSubjects.list1.score}
            </p>

            <p>
              {studentDetails.exam.selectableSubjects.list2.type}:{" "}
              {studentDetails.exam.selectableSubjects.list2.score}
            </p>

            <p>
              {studentDetails.exam.selectableSubjects.list3.type}:{" "}
              {studentDetails.exam.selectableSubjects.list3.score}
            </p>
          </div>

          <div className="card_student">
            <h3>Attendance Details</h3>
            {studentDetails.attendance.length === 0 ? (
              <h1>ATTENDANCE IS NOT ENTERED</h1>
            ) : (
              studentDetails.attendance.map((record, index) => (
                <div key={index}>
                  <p>
                    Date:
                    {new Date(record.date).toLocaleString("en-IN", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                  <p>Roll No: {record.rollno}</p>
                  <p>Present: {record.isPresent ? "Yes" : "No"}</p>
                  <hr />
                </div>
              ))
            )}
          </div>

          <div className="card_student">
            <h3>Fees Details</h3>
            {studentDetails.fees.map((fee, index) => (
              <div key={index}>
                <p>Fee Amount: {fee.feeAmount}</p>
                <p>Payment Date: {fee.paymentDate}</p>
              </div>
            ))}
          </div>

          <div className="card_student">
            <h3>Complaints</h3>
            {studentDetails.complaints.map((complaint, index) => (
              <div key={index}>
                <p>Title: {complaint.title}</p>
                <p>Description: {complaint.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default StudentDetails;
