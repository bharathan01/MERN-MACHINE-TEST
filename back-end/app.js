const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookieParser');

const authRouter = require('./routes/auth.route.js');


const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/api/auth' , authRouter);


app.use('**',(req,res)=>{
    res.status(404).json({
        message:"page not found"
    })
})

module.exports = app