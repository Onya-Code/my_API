const AuthService = require('./Services/identity.js');

const Signup = async (req, res) => {

 const payload = res.body;

 const SignupResponse await AuthService.Signup ({
  firstName: payload.firstName,
  surName: payload.surName,
  email: payload.email,
  password: payload.password,
 })

 res.status(SignupResponse.code).json(SignupResponse)
}

const Login = async (req, res) => {

 const payload = res.body;

 const LoginResponse await AuthService.Login ({
  email: payload.email,
  password: payload.password,
 })

 res.status(LoginResponse.code).json(SignupResponse)
}

module.exports {
 Login,
 Signup,
}