import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Examdetails.css";
const Examdetails = () => {
  const [userId, setUserId] = useState("");
  const [marks, setMarks] = useState({
    Web_technology: "",
    Software_Engineer: "",
    Computer_graphics: "",
    Big_data_analytics: "",
    Artificial_intelligence: "",
  });
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    // Fetch user profile data when component mounts
    axios
      .get("https://student-management-qr9p.onrender.com/allprofiles", {
        headers: {
          "x-token": localStorage.getItem("token"),
        },
      })
      .then((response) => {
        // Filter user list to display only users with usertype 'user'
        const filteredUsers = response.data.data.filter(
          (user) => user.usertype === "user"
        );

        setUserList(filteredUsers);

        // Set the userId to the first user in the filtered list
        if (filteredUsers.length > 0) {
          setUserId(filteredUsers[0]._id);
        }
      })
      .catch((error) => {
        toast.error("Error fetching user profile:", error);
      });
  }, []); // Empty dependency array to run effect only once when component mounts

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        `https://student-management-qr9p.onrender.com/exam/${userId}`,
        {
          Web_technology: marks.Web_technology,
          Software_Engineer: marks.Software_Engineer,
          Computer_graphics: marks.Computer_graphics,
          Big_data_analytics: marks.Big_data_analytics,
          Artificial_intelligence: marks.Artificial_intelligence,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "x-token": localStorage.getItem("token"),
          },
        }
      );

      if (response.status === 200) {
        toast.success("Exam marks added successfully");
        setMarks({
          Web_technology: "",
          Software_Engineer: "",
          Computer_graphics: "",
          Big_data_analytics: "",
          Artificial_intelligence: "",
        }); // Clear input fields after successful submission
      } else {
        toast.error("Error adding exam marks");
      }
    } catch (error) {
      console.error("Error adding exam marks:", error);
      toast.error("Error adding exam marks");
    }
  };

  return (
    <div className="container_exammarks">
      <h2>Add Exam Marks</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="userId">Select Student:</label>
          <select
            id="userId"
            className="form-control"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            required
          >
            {userList.map((user) => (
              <option key={user._id} value={user._id}>
                {user.fullname} - {user.email}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="Web_technology">Web Technology:</label>
          <input
            type="number"
            id="Web_technology"
            className="form-control"
            value={marks.Web_technology}
            onChange={(e) =>
              setMarks({ ...marks, Web_technology: e.target.value })
            }
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="Software_Engineer">Software Engineer:</label>
          <input
            type="number"
            id="Software_Engineer"
            className="form-control"
            value={marks.Software_Engineer}
            onChange={(e) =>
              setMarks({ ...marks, Software_Engineer: e.target.value })
            }
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="Computer_graphics">Computer Graphics:</label>
          <input
            type="number"
            id="Computer_graphics"
            className="form-control"
            value={marks.Computer_graphics}
            onChange={(e) =>
              setMarks({ ...marks, Computer_graphics: e.target.value })
            }
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="Big_data_analytics">Big Data Analytics:</label>
          <input
            type="number"
            id="Big_data_analytics"
            className="form-control"
            value={marks.Big_data_analytics}
            onChange={(e) =>
              setMarks({ ...marks, Big_data_analytics: e.target.value })
            }
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="Artificial_intelligence">
            Artificial Intelligence:
          </label>
          <input
            type="number"
            id="Artificial_intelligence"
            className="form-control"
            value={marks.Artificial_intelligence}
            onChange={(e) =>
              setMarks({ ...marks, Artificial_intelligence: e.target.value })
            }
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Examdetails;
