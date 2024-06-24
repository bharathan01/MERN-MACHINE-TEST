import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./allemp.css";
import Banner from "../../components/banner/Banners";
import { employeDetails } from "../../service/connectServer";
function AllEmp() {
  const [empDetils, setEmpdetails] = useState();
  useEffect(() => {
    const fetchEmployeeDetails = async () => {
      const response = await employeDetails();
      setEmpdetails(response.empData);
    };
    fetchEmployeeDetails();
  }, []);
  return (
    <div>
      <Banner content={"Employee List"} />
      <div className="main-container">
        <Link to="/create-employee">
          <button>Create Employee</button>
        </Link>
        <input type="text" placeholder="search.." />
      </div>
      <div className="total">
        <span>Total Count: 12 </span>
      </div>                          
      <div className="table-content">
        <table>
          <tr>
            <th>Unique ID</th>
            <th>Image</th>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Designation</th>
            <th>Gender</th>
            <th>Course</th>
            <th>Create Date</th>
            <th>Action</th>
          </tr>
          {empDetils.map((element) => {
            return (
              <tr>
                <td>1</td>
                <td>sdagf</td>
                <td>bharathan</td>
                <td>bharathan@gmail.com</td>
                <td>456789076543</td>
                <td>Manager</td>
                <td>Male</td>
                <td>BCA</td>
                <td>12/03/2024</td>
                <td>
                  <div className="action">
                    <span>Edit</span>
                    <span>Delete</span>
                  </div>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
}

export default AllEmp;
