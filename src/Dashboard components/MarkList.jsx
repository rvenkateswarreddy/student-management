import React, { useState, useEffect } from "react";
import axios from "axios";

const MarkList = () => {
  const [userData, setUserData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // Fetch user profile data when component mounts
    axios
      .get("https://student-management-qr9p.onrender.com/allprofiles", {
        headers: {
          "x-token": localStorage.getItem("token"),
        },
      })
      .then((res) => {
        // Filter out users with usertype 'admin' and get the latest exam entry for each user
        const filteredData = res.data.data
          .filter((user) => user.usertype !== "admin")
          .map((user) => {
            return {
              ...user,
              exam:
                user.exam.length > 0 ? [user.exam[user.exam.length - 1]] : [],
            };
          });
        setUserData(filteredData);
        setIsLoading(false); // Set loading to false after data is fetched
      })
      .catch((err) => console.error(err));
  }, []);

  const filteredUsers = userData.filter((user) =>
    user.fullname.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const renderTable = (userData, title) => (
    <div id="markTableContainer" className="tableWholeContainer">
      <h2 style={{ marginTop: "10px" }}>{title}</h2>
      <div className="table-container">
        <table className="neumorphic-table">
          <thead>
            <tr>
              <th>User Type</th>
              <th>Full Name</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Web Technology</th>
              <th>Software Engineer</th>
              <th>Computer Graphics</th>
              <th>Big Data Analytics</th>
              <th>Artificial Intelligence</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {userData.map((user) =>
              user.exam.map((entry, index) => (
                <tr key={`${user._id}-${index}`}>
                  <td>{user.usertype}</td>
                  <td>{user.fullname}</td>
                  <td>{user.email}</td>
                  <td>{user.mobile}</td>
                  <td>{entry.Web_technology}</td>
                  <td>{entry.Software_Engineer}</td>
                  <td>{entry.Computer_graphics}</td>
                  <td>{entry.Big_data_analytics}</td>
                  <td>{entry.Artificial_intelligence}</td>
                  <td>{/* Action buttons can be placed here */}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search by name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {isLoading ? <p>Loading...</p> : renderTable(filteredUsers, "Mark List")}
    </div>
  );
};

export default MarkList;
