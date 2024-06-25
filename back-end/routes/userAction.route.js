const express = require("express");
const router = express.Router();

const {
  editEmployeeDetails,
  deleteEmployeeDetails,
  addNewEmployee,
  getEmployeeDateils,
  getSingleEmployeeDetails
} = require("../controllres/userController.js");
const {
  validate,
  validateUser,
} = require("../middleware/validateUserInput.js");
const upload = require("../middleware/multerUploadImage.js");

router.get('/getempdetails', getEmployeeDateils)


router.post(
  "/create-employe",
  upload.single("imgUpload"),
  addNewEmployee
);
router.get(
  "/employee-details/:id",
  getSingleEmployeeDetails
);
router.post(
  "/edit-employe",
  // validateUser,
  // validate,
  // upload.single("imgUpload"),
  editEmployeeDetails
);
router.get("/delete-employe/:id", deleteEmployeeDetails);

module.exports = router;
