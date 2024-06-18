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

const logInUser = tryCatch((req, res) => {
  res.status(200).json({ message: "okay" });
});


const registerUser = tryCatch(async (req, res) => {
  const { userName, password } = req.body;
  if (!userName) throw new ApiError(BAD_REQUEST, "User name is required !");
  if (!password) throw new ApiError(BAD_REQUEST, "password is required !");
  const user = await userSchema.findOne({ f_username: userName });
  if (user) throw new ApiError(BAD_REQUEST, "User name is already present !");

  const userData = new userSchema({
    f_username: userName,
    f_pwd: password,
  });

  const responce = await userData.save();
  if (!responce)
    throw new ApiError(INTERNAL_SERVER_ERROR, "can't create a user!");

  res.status(SUCCESS).json({ message: "user created successfully" });
});

module.exports = { logInUser, registerUser };
