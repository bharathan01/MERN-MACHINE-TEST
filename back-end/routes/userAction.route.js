const express = require("express");
const router = express.Router();

const {
  editEmployeeDetails,
  deleteEmployeeDetails,
  addNewEmployee,
} = require("../controllres/userController.js");
const {
  validate,
  validateUser,
} = require("../middleware/validateUserInput.js");
const upload = require("../middleware/multerUploadImage.js");

router.post(
  "/create-employe",
  validateUser,
  validate,
  upload.single("fileFieldName"),
  addNewEmployee
);
router.post(
  "/edit-employe",
  validateUser,
  validate,
  upload.single("fileFieldName"),
  editEmployeeDetails
);
router.post("/delete-employe", deleteEmployeeDetails);

module.exports = router;
