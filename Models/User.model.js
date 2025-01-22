const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.schema({
  _id: String,
  first_Name: String,
  last_Name: String,
  email: {unique: true, type: String},
  password: String,
})

UserSchema.pre(
  'save',
  async function (next) {
    const user = this;
    const hash = await bcrypt.hash(this.password, 10);

    this.password = hash;
    next();
  }

)

UserSchema.methods.isValidPassword = async function(password) {
  const user = this;
  const compare = await bcrypt.compare(password, user.password);

  return compare;
}


const UserModel = mongoose.model('user', UserSchema);

module.exports = UserModel;