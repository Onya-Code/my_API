const joi = require('joi');

const validateCreatePost = (req, res, next) => {
 const bodyOfRequest = req.bodyOfRequest

 const schema = joi.object({
  text: joi.string().required()
 })

 const valid = await schema.validateAsync(bodyOfRequest);


 if (valid.error) {
  return res.status(422).json ({
   message: valid.error.message
  })
 }

 next();
}

module.exports = {
 validateCreatePost
}