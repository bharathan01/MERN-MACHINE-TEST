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
  // body("imgUpload").notEmpty().withMessage("Image is required"),
  body("name").notEmpty().withMessage("Name is required"),
  body("email")
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Email must be valid"),
  body("mobile").notEmpty().withMessage("Mobile no is required"),
  body("designation").notEmpty().withMessage("Designation is required"),
  body("gender").notEmpty().withMessage("Gender is required"),
  body("course").notEmpty().withMessage("Course is required"),
];

const validate = (req, res, next) => {
  console.log(req.body)
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    throw new ApiError(BAD_REQUEST, { errors: errors.array() });
  }
  next();
};

module.exports = { validate, validateUser };
