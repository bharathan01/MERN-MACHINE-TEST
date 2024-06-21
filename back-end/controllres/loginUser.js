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
const generateJwtToken = require("../utils/jwtTokenGenerate.js");

const logInUser = tryCatch(async (req, res) => {
  const { username, password } = req.body;
  console.log(username,password)
  if (!username)
    throw new ApiError(BAD_REQUEST, {
      error: { username: "Plase enter user name" },
    });
  if (!password)
    throw new ApiError(BAD_REQUEST, {
      error: { password: "Plase enter password" },
    });

  const isUserPresent = await userSchema.findOne({ f_username: username });
  if (!isUserPresent)
    throw new ApiError(BAD_REQUEST, {
      error: {
        username: "Plase enter valid user name",
      },
    });
  const isPasswordCorrect = await compairPassword(
    password,
    isUserPresent.f_pwd
  );
  if (isPasswordCorrect) {
    const accessToken = generateJwtToken(
      isUserPresent.f_username,
      process.env.ACCESS_TOKEN_SECRET_KEY,
      "10m"
    );
    const refreshToken = generateJwtToken(
      isUserPresent.f_username,
      process.env.REFRESH_TOKEN_SECRET_KEY,
      "1d"
    );
    const options = {
      httpOnly: true,
      secure: true,
      sameSite: 'None'
    };
    res
      .status(200)
      .cookie("refreshToken", refreshToken, options)
      .cookie("accessToken", accessToken, options)
      .json({
        status: "SUCCESS",
        userData: {
          f_username: isUserPresent.f_username,
          f_sno: isUserPresent.f_sno,
        },
        message: "log in success",
      });
  } else {
    throw new ApiError(BAD_REQUEST, {
      error: {
        password: "Plase enter valid password",
      },
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
