const express = require("express");
const router = express.Router();

const {
  deleteEmployeDatils,
  editeEmployeeDetails,
  addNewEmployee,
} = require("../controllres/userController.js");
const {
  validate,
  validateUser,
} = require("../middleware/validateUserInput.js");
const upload = require("../middleware/multerUploadImage.js");

router.post("/create-employe", validateUser, validate, upload, addNewEmployee);
router.post("/edit-employe", editeEmployeeDetails);
router.post("/delete-employe", deleteEmployeDatils);

module.exports = router;
