import React from "react";
import "./TimeTable.css";

const TImeTable = () => {
  return (
    <div className="table-container0">
      <h1>Time Table For Semister:</h1>
      <table className="custom-table0">
        <thead>
          <tr>
            <th>Day</th>
            <th>Course Code</th>
            <th>QPCODE</th>
            <th>Paper</th>
            <th>Compulsory Foundation</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Monday</td>
            <td>MCA-301</td>
            <td>12-00-3-01R</td>
            <td>301:Software Engineering</td>
            <td>CORE</td>
          </tr>
          <tr>
            <td> Tuesday</td>
            <td>MCA-302</td>
            <td>12-00-3-02R</td>
            <td>302:Computer Graphics</td>
            <td>CORE</td>
          </tr>
          <tr>
            <td>Wednesday</td>
            <td>MCA-303</td>
            <td>12-00-3-03R</td>
            <td>303:Web Technologies</td>
            <td>GENERIC ELECTIVE</td>
          </tr>
          <tr>
            <td>Thursday</td>
            <td>MCA-304</td>
            <td>12-00-3-06R</td>
            <td>
              304:a.Data Warehousing & Data mining
              <td>304:b.Big Data Analytics</td>
              304:c.System Programming
            </td>
            <td>GENERIC ELECTIVE</td>
          </tr>
          <tr>
            <td>Friday</td>
            <td>MCA-305</td>
            <td>12-00-3-09R</td>
            <td>
              305:a.Crytography & Network security
              <td>305:b.Artificial Intelligence</td>
              305:c.Mobile Application Development
            </td>
            <td>Generic Elective</td>
          </tr>
          <tr>
            <td>Saturday</td>
            <td>MCA-306 </td>
            <td>4-75-316</td>
            <td>316:Open Electives</td>
            <td>Open Elective</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TImeTable;
