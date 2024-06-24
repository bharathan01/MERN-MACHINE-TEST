const multer = require("multer");
const path = require("path");


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, ".././front-end/src/images/"); // Destination folder for uploaded files
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
        const ext = path.extname(file.originalname); // Extract file extension
        cb(null, `${uniqueSuffix}${ext}`); // Constructing file name
    },
});
const upload = multer({ storage: storage });



module.exports = upload;