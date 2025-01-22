const jwt = require('jsonwebtoken');

const Usermodel = require('./models/user.model');

const ValidateToken = async (req, res, next) => {
 let bearerToken = res.header.Authorization;

 bearerToken = bearerToken.split(' ') (1)

 if (!bearerToken) {
  return res.status(403).json({ 
   message: 'unauthorized'
  })
 }

 const validToken = await jwt.verify(bearerToken, process.env.SECRET_KEY) 

 if (!validToken) {
  return res.status(403).json({
   message: 'Unauthorized'
  })
 }

 req.user

 const user = await Usermodel.findOne({ email: validToken.email})

 if (!user) {
  return res.status(403).json({
   message: 'Unauthorized'
  })
 }

 req.user = user
 next()

}

module.exports = {
 validateToken,
}