import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./AllProfiles.css";
const Bothprofile = () => {
  const [userdata, setuserdata] = useState([]);
  const [admindata, setadmindata] = useState([]);

  useEffect(() => {
    axios
      .get("https://student-management-qr9p.onrender.com/allprofiles", {
        headers: {
          "x-token": localStorage.getItem("token"),
        },
      })
      .then((res) => {
        const maindata = res.data.data;
        const maindatafilter2 = maindata.filter(
          (user) => user.usertype === "user"
        );
        const maindatafilter = maindata.filter(
          (user) => user.usertype === "admin"
        );
        setuserdata(maindatafilter2);
        setadmindata(maindatafilter);
      })
      .catch((er) => console.log(er));
  }, []);

  return (
    <div className="adminusercontainer2">
      {userdata && admindata.length == 0 ? (
        <h1>loading ....</h1>
      ) : (
        <div className="adminusercontainer">
          <Link to="user" className="cardso1">
            <h1>STUDENTS</h1>
            <h2>TOTAL NO OF STUDENTS:{userdata.length}</h2>
          </Link>
          <Link to="admin" className="cardso2">
            <h1>ADMINS</h1>
            <h2>TOTAL NO OF ADMINS:{admindata.length}</h2>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Bothprofile;
