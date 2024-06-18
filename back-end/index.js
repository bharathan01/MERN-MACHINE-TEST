const app = require("./app.js");
const { connectDataBase } = require("./db/connectDb.js");
require("dotenv").config();

const PORT = process.env.PORT || 3000;

connectDataBase()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server started at http://locathost:${PORT}`);
    });
  })
  .catch((error) => {
     console.log('Somthing went wrong',error)
     process.exit(1)
  });
