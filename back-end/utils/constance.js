require("dotenv").config();

dataBaseConnectionUrl = `mongodb+srv://bharathandileep01:${process.env.MONGO_PASSWORD}@cluster0.mhpx1hh.mongodb.net/${process.env.DB_NAME}`;
module.exports = { dataBaseConnectionUrl };
  