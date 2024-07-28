import React, { useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { debounce } from "lodash";
import "./allemp.css";
import Banner from "../../components/banner/Banners";
import {
  deleteEmployeeData,
  employeDetails,
} from "../../service/connectServer";

function AllEmp() {
  //create the stae
  const [empDetails, setEmpDetails] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchEmployeeDetails = async () => {
      const response = await employeDetails();
      setEmpDetails(response.empData);
    };
    fetchEmployeeDetails();
  }, []);

  const handleDeleteEmployee = async (empId) => {
    const response = await deleteEmployeeData(empId);
    if (response.status === "SUCCESS") {
      setEmpDetails((prevDetails) =>
        prevDetails.filter((emp) => emp._id !== empId)
      );
    }
  };

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const filteredEmpDetails = useMemo(() => {
    if (!searchTerm) {
      return empDetails;
    }
    return empDetails.filter((item) => {
      return (
        item._id.toLowerCase().includes(searchTerm) ||
        item.f_Name.toLowerCase().includes(searchTerm) ||
        item.f_Email.toLowerCase().includes(searchTerm) ||
        item.createdAt.toLowerCase().includes(searchTerm)
      );
    });
  }, [searchTerm, empDetails]);

  return (
    <div>
      <Banner content={"Employee List"} />
      <div className="main-container">
        <Link to="/create-employee">
          <button>Create Employee</button>
        </Link>
        <input type="text" placeholder="search.." onChange={handleOnChange} />
      </div>
      <div className="total">
        <span>Total Count: {filteredEmpDetails.length}</span>
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
            {!filteredEmpDetails ? (
              <><span>Empty employee details</span></>
            ) : (
              <>
                {filteredEmpDetails.map((element, idx) => (
                  <tr key={element._id}>
                    <td>{idx + 1}</td>
                    <td>
                      <img
                        className="profile-img"
                        src={`../src/images/${element.f_Image}`}
                        alt="profile"
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
                        <span onClick={() => handleDeleteEmployee(element._id)}>
                          Delete
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AllEmp;
