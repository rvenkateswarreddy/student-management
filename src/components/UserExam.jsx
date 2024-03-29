import React from "react";
import "./UserExam.css";

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

  // If exam details are not loaded yet
  if (!exam) {
    return (
      <div>
        <h1 style={{ color: "red" }}>Loading...</h1>
        <h1 style={{ color: "red" }}>your exams details are not entered</h1>
      </div>
    );
  }

  // If exam details are empty
  if (Object.keys(exam).length === 0) {
    return <h1>Your exam details are not entered</h1>;
  }

  // Calculate total marks
  const totalMarks =
    exam.fixedSubjects.Web_technology +
    exam.fixedSubjects.Software_Engineer +
    exam.fixedSubjects.Computer_graphics +
    exam.selectableSubjects.list1.score +
    exam.selectableSubjects.list2.score +
    exam.selectableSubjects.list3.score;

  // Calculate percentage
  const maxMarks = 600;
  const percentage = (totalMarks / maxMarks) * 100;

  return (
    <div className="card">
      <div className="card-header bg-primary text-white">
        User Information and Exam
      </div>
      <div className="card-body">
        <h5 className="card-title">Full Name: {fullname}</h5>
        <p className="card-text">
          <strong>Mobile:</strong> {mobile}
          <br />
          <strong>Course:</strong> {course}
          <br />
          <strong>Department:</strong> {department}
        </p>
        <div className="exam-details">
          <h5 className="card-title">Exam Details</h5>
          <ul className="list-unstyled">
            <li>
              <strong>Web Technology:</strong>{" "}
              {exam.fixedSubjects.Web_technology}
            </li>
            <li>
              <strong>Software Engineer:</strong>{" "}
              {exam.fixedSubjects.Software_Engineer}
            </li>
            <li>
              <strong>Computer Graphics:</strong>{" "}
              {exam.fixedSubjects.Computer_graphics}
            </li>
            <li>
              <strong>{exam.selectableSubjects.list1.type}:</strong>{" "}
              {exam.selectableSubjects.list1.score}
            </li>
            <li>
              <strong>{exam.selectableSubjects.list2.type}:</strong>{" "}
              {exam.selectableSubjects.list2.score}
            </li>
            <li>
              <strong>{exam.selectableSubjects.list3.type}:</strong>{" "}
              {exam.selectableSubjects.list3.score}
            </li>
            <li>
              <strong>Total Marks:</strong> {totalMarks}
            </li>
            <li>
              <strong>Percentage:</strong> {percentage.toFixed(2)}%
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserExam;
