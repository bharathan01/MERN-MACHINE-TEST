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

router.post("/create-employe", upload.single("img"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "No file uploaded" });
  }
  console.log(req.file);
  res.status(200).json({ imageUrl: req.file.path });
});
router.post("/edit-employe", upload.single("imgUpload"), editEmployeeDetails);
router.post("/delete-employe", deleteEmployeeDetails);

module.exports = router;
