const jwt = require('jsonwebtoken')


const generateJwtToken = (userInfo,secretKey,exprTime) =>{
    return jwt.sign({userInfo},secretKey,{expiresIn:exprTime})
}

module.exports = generateJwtToken