import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./allemp.css";
import Banner from "../../components/banner/Banners";
import { employeDetails } from "../../service/connectServer";
function AllEmp() {
  const [empDetils, setEmpdetails] = useState(null);
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
          <thead>
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
          </thead>
          <tbody>
            {empDetils?.map((element) => {
              console.log(element)
              return (
                <tr key={element.f_Email}>
                  <td>1</td>
                  <td>sdagf</td>
                  <td>{element.f_Name}</td>
                  <td>{element.f_Email}</td>
                  <td>{element.f_Mobail}</td>
                  <td>{element.f_Designation}</td>
                  <td>{element.f_gender}</td>
                  <td>BCA</td>
                  <td>{element.createdAt}</td>
                  <td>
                    <div className="action">
                      <span>Edit</span>
                      <span>Delete</span>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AllEmp;
