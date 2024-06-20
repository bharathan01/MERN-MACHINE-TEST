const { body, validationResult } = require("express-validator");
const ApiError = require("../utils/customError.js");
const {
  BAD_REQUEST,
  SUCCESS,
  INTERNAL_SERVER_ERROR,
  NOT_FOUND,
  FORBIDDEN,
} = require("../utils/statusCodes.js");
const validateUser = [
  body("f_Image").notEmpty().withMessage("Email is required"),
  body("f_Name").notEmpty().withMessage("Name is required"),
  body("f_Email")
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Email must be valid"),
  body("f_Mobile")
    .notEmpty()
    .withMessage("Mobile number is required")
    .matches(/^[0-9]{10}$/)
    .withMessage("Mobile must be a valid 10-digit number"),
  body("f_Designation").notEmpty().withMessage("Designation is required"),
  body("f_gender").notEmpty().withMessage("Gender is required"),
  body("f_Course").notEmpty().withMessage("Course is required"),
  body("f_Createdate").notEmpty().withMessage("Createdate is required"),
];

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    throw new ApiError(BAD_REQUEST, { errors: errors.array() });
  }
  next();
};


module.exports = {validate,validateUser};