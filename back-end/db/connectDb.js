const mongoos = require("mongoose");
const { dataBaseConnectionUrl } = require("../utils/constance.js");

async function connectDataBase() {
    console.log(dataBaseConnectionUrl)
  try {
    const connection = await mongoos.connect(dataBaseConnectionUrl);
    console.log(
      `Database connected successfully ${connection.connection.host}`
    );
  } catch (error) {
    console.log("MONGODB CONNECTION FAILD > ", error);
    process.exit(1);
  }
}

module.exports = {
    connectDataBase
}
