const tryCatch = require("../utils/tryCatch.js");
const employeeSchema = require("../models/employee.model.js");
const ApiError = require("../utils/customError.js");
const {
  BAD_REQUEST,
  SUCCESS,
  INTERNAL_SERVER_ERROR,
  NOT_FOUND,
  FORBIDDEN,
} = require("../utils/statusCodes.js");

const addNewEmployee = tryCatch(async (req, res) => {
  const { name, email, mobile, designation, gender, course } = req.body;
  const file = req.file;
  const newEmployee = new employeeSchema({
    f_Name: name,
    f_Image: file.filename,
    f_Email: email,
    f_Mobile: mobile,
    f_Designation: designation,
    f_gender: gender,
    f_Course: course,
  });
  const creatEmployee = await newEmployee.save();
  if (!creatEmployee)
    throw new ApiError(
      INTERNAL_SERVER_ERROR,
      "Somthing Went wrong! can not create new employee"
    );
  res.status(SUCCESS).json({
    status: "SUCCESS",
    message: "employee created successfully ",
    creatEmployee,
  });
});
const editEmployeeDetails = tryCatch(async (req, res) => {
  const { id } = req.params;
  const { name, email, mobile, designation, gender, course } = req.body;
  const updatedData = {
    f_Name : name,
    f_Email:email,
    f_Mobile:mobile,
    f_Designation:designation,
    f_gender:gender,
    f_Course:course,
  };

  // Include the image file if it's present in the request
  if (req.file) {
    updatedData.f_Image = req.file.filename;
  }

  const updatedEmployee = await employeeSchema.findByIdAndUpdate(
    { _id: id },
    updatedData,
    { new: true }
  );

  if (!updatedEmployee)
    throw new ApiError(NOT_FOUND, "Employee not found or update failed");

  res.status(SUCCESS).json({
    status: "SUCCESS",
    message: "Employee details updated successfully",
    updatedEmployee,
  });
});

const deleteEmployeeDetails = tryCatch(async (req, res) => {
  const { id } = req.params; // Assuming the employee ID is passed as a URL parameter

  const deletedEmployee = await employeeSchema.findByIdAndDelete(id);

  if (!deletedEmployee)
    throw new ApiError(NOT_FOUND, "Employee not found or delete failed");

  res.status(SUCCESS).json({
    status: "SUCCESS",
    message: "Employee deleted successfully",
  });
});
const getEmployeeDateils = tryCatch(async (req, res) => {
  const employeeData = await employeeSchema.find();
  if (!employeeData) throw new ApiError(FORBIDDEN, "not getting any data");

  const empData = employeeData.map((ele) => {
    const date = new Date(ele.createdAt);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    const formattedDate = `${day}/${month}/${year}`;

    return {
      ...ele.toObject(),
      createdAt: formattedDate,
    };
  });

  res.status(SUCCESS).json({
    status: "SUCCESS",
    message: "Data fetched successfully",
    empData,
  });
});
const getSingleEmployeeDetails = tryCatch(async (req, res) => {
  const { id } = req.params;
  const singleEmpData = await employeeSchema.findOne({ _id: id });
  if (!singleEmpData)
    throw new ApiError(NOT_FOUND, "employee details not found");

  res.status(SUCCESS).json({
    status: "SUCCESS",
    message: "employee data found",
    singleEmpData,
  });
});

module.exports = {
  deleteEmployeeDetails,
  editEmployeeDetails,
  addNewEmployee,
  getEmployeeDateils,
  getSingleEmployeeDetails,
};
