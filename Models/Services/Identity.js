const Usermodel = require("./Models/User.model");
const jwt = require('jsonwebtoken');



const Login = async ({ email, password }) => {
  try {

    const user = await Usermodel.findOne({email}); 
    if (!user) {
      return {
        code: 402,
        success: false,
        data: null,
        message: 'Incorrect email or password'
      }
    }

    const validPassword = await user.isValidPassword(password);

    if (!validPassword) {
      return {
        code: 402,
        success: false,
        data: null,
        message: 'Incorrect email or password'
      }
    }

    const token = await jwt.sign({ email });

  } catch (error) {
    return{
      code: 503,
      success: false,
      data: null,
      message: 'Server error'
    }
  }
}




const Signup = async({ Lastname, Firstname, Email, Password }) => {
  try {
    const newUser = await userNodel.create({
      Lastname,
      Firstname,
      Email,
      Password
     })
   
    const token = await jwt.sign({ email }); 

  } catch (error) {
    return {
      code: 503,
      success: false,
      data: null,
      message: 'Server error'
    }
  }
}



module.exports = {
  Login,
  Signup
}