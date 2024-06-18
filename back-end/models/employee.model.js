const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema(
  {
    f_id: {
      type: String,
      require: true,
      unique: true,
    },
    f_Name: {
      type: String,
      require: true,
      unique: true,
    },
    f_Email: {
      type: String,
      require: true,
      unique: true,
    },
    f_Mobile: {
      type: String,
      require: true,
      unique: true,
    },
    f_Designation: {
      type: String,
      require: true,
      unique: true,
    },
    f_gender: {
      type: String,
      require: true,
      unique: true,
    },
    f_Image: {
      type: String,
      require: true,
      unique: true,
    },
    f_Createdate: {
      type: String,
      require: true,
      unique: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("t_Employee", employeeSchema);
