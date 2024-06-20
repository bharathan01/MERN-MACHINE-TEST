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
  const {
    f_Id,
    file,
    f_Name,
    f_Email,
    f_Mobile,
    f_Designation,
    f_gender,
    f_Course,
    f_Createdate,
  } = req.body;
  const newEmployee = new employeeSchema({
    f_Id,
    f_Name,
    f_Image: file.filename,
    f_Email,
    f_Mobile,
    f_Designation,
    f_gender,
    f_Course,
    f_Createdate,
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

module.exports = { deleteEmployeeDetails, editEmployeeDetails, addNewEmployee };
