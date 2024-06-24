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
  console.log(req.body);
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
  const { id } = req.params; // Assuming the employee ID is passed as a URL parameter
  const {
    f_Name,
    f_Email,
    f_Mobile,
    f_Designation,
    f_gender,
    f_Course,
    f_Createdate,
  } = req.body;

  const updatedData = {
    f_Name,
    f_Email,
    f_Mobile,
    f_Designation,
    f_gender,
    f_Course,
    f_Createdate,
  };

  // Include the image file if it's present in the request
  if (req.file) {
    updatedData.f_Image = req.file.filename;
  }

  const updatedEmployee = await employeeSchema.findByIdAndUpdate(
    id,
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
  const empData = await employeeSchema.find();
  if(!empData)
    throw new ApiError(FORBIDDEN,"not getting any data")

  res.status(SUCCESS).json({
    status:"SUCCESS",
    message:"Data fetch successfully",
    empData
  })
});

module.exports = {
  deleteEmployeeDetails,
  editEmployeeDetails,
  addNewEmployee,
  getEmployeeDateils,
};
