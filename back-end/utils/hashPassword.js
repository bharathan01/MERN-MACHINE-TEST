const bcrypt = require("bcrypt");

const hashPassword = async (password) => {
  const salt = 10;
  return await bcrypt.hash(password, salt);
};

const compairPassword = async (password, hashedPassword) => {
  return await bcrypt.compare(password, hashedPassword);
};

module.exports = { hashPassword, compairPassword };
