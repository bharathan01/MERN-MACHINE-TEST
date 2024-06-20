const tryCatch = require("../utils/tryCatch.js");
const userSchema = require("../models/user.model.js");
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
    f_Image,
    f_Name,
    f_Email,
    f_Mobile,
    f_Designation,
    f_gender,
    f_Course,
    f_Createdate,
  } = req.body;
  
});
const editeEmployeeDetails = tryCatch(async (req, res) => {});
const deleteEmployeDatils = tryCatch(async (req, res) => {});

module.exports = { deleteEmployeDatils, editeEmployeeDetails, addNewEmployee };
