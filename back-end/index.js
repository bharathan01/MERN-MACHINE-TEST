const app = require("./app.js");
const { connectDataBase } = require("./db/connectDb.js");
require("dotenv").config();

const PORT = process.env.PORT || 3000;

// the backend code base containe
  // -index.js - starting phase
  // -app.js for inital setup (to keep the index file clean and readble)
  // model - db model , db - connecting the mongodb
  // controller - api handle logic
  // routes - to modules the differnt routes
  // middlewere - error handleing , token validation , image storing , validate inputs
  // utils - commen methods to reuse on the go. 
// use mutler to store images (bcz simple web site)


//connecting the server and mongoDB d
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
