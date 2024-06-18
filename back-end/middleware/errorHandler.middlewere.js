const { INTERNAL_SERVER_ERROR } = require("../utils/statusCodes.js");

const errorHandler = (error, req, res, next) => {
  const status = "FAILD";
  const statusCode = error.status || INTERNAL_SERVER_ERROR;
  const message = error.message;

  res.status(statusCode).json({
    status,
    message
  })
};

module.exports = errorHandler;