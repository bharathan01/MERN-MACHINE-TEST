const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    // f_no: {
    //   type: String,
    //   require: true,
    // },
    f_username: {
      type: String,
      require: true,
      unique: true,
    },
    f_pwd: {
      type: String,
      require: true,
    },
  },
  {
    timeseries: true,
  }
);

module.exports = mongoose.model("t_login", userSchema);
