import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./allemp.css";
import Banner from "../../components/banner/Banners";
import {
  deleteEmployeeData,
  employeDetails,
} from "../../service/connectServer";
function AllEmp() {
  const [empDetils, setEmpdetails] = useState(null);
  useEffect(() => {
    const fetchEmployeeDetails = async () => {
      const response = await employeDetails();
      setEmpdetails(response.empData);
    };
    fetchEmployeeDetails();
  }, [deleteEmployee]);
  async function deleteEmployee(empId){
    const responce = await deleteEmployeeData(empId);
  };
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
        <span>Total Count: {empDetils?.length} </span>
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
            {empDetils?.map((element, idx) => {
              return (
                <tr key={element.f_Email}>
                  <td>{idx + 1}</td>
                  <td>
                    <img
                      className="profile-img"
                      src={`../src/images/${element.f_Image}`}
                      alt="profile image"
                    />
                  </td>
                  <td>{element.f_Name}</td>
                  <td>{element.f_Email}</td>
                  <td>{element.f_Mobile}</td>
                  <td>{element.f_Designation}</td>
                  <td>{element.f_gender}</td>
                  <td>{element.f_Course}</td>
                  <td>{element.createdAt}</td>
                  <td>
                    <div className="action">
                      <Link to={`/edit-employee/${element._id}`}>
                        <span>Edit</span>
                      </Link>
                      <span onClick={() => deleteEmployee(element._id)}>
                        Delete
                      </span>
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
