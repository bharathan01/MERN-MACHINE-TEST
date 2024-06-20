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
const { hashPassword, compairPassword } = require("../utils/hashPassword.js");

const logInUser = tryCatch(async (req, res) => {
  const { userName, password } = req.body;
  if (!userName)
    throw new ApiError(BAD_REQUEST, { username: "Plase enter user name" });
  if (!password)
    throw new ApiError(BAD_REQUEST, { password: "Plase enter password" });

  const isUserPresent = await userSchema.findOne({ f_username: userName });
  if (!isUserPresent)
    throw new ApiError(BAD_REQUEST, {
      invalidUsername: "Plase enter valid user name",
    });
  const isPasswordCorrect = await compairPassword(
    password,
    isUserPresent.f_pwd
  );
  console.log(isPasswordCorrect);
  if (isPasswordCorrect) {
    res.status(200).json({
      status: "SUCCESS",
      userData: {
        f_username: isUserPresent.f_username,
        f_sno: isUserPresent.f_sno,
      },
      message: "log in success",
    });
  } else {
    throw new ApiError(BAD_REQUEST, {
      invalidUsername: "Plase enter valid password",
    });
  }
});

const registerUser = tryCatch(async (req, res) => {
  const { userName, password } = req.body;
  if (!userName) throw new ApiError(BAD_REQUEST, "User name is required !");
  if (!password) throw new ApiError(BAD_REQUEST, "password is required !");
  const user = await userSchema.findOne({ f_username: userName });
  if (user) throw new ApiError(BAD_REQUEST, "User name is already present !");

  const hashedPassword = await hashPassword(password);

  const userData = new userSchema({
    f_username: userName,
    f_pwd: hashedPassword,
  });

  const responce = await userData.save();
  if (!responce)
    throw new ApiError(INTERNAL_SERVER_ERROR, "can't create a user!");

  res.status(SUCCESS).json({ message: "user created successfully" });
});

module.exports = { logInUser, registerUser };
