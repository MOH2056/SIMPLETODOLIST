const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true},
    password: {type: String, required: true},
    location: {type: String, required: true},
    age: {type: String, required: true}
})
// Hash the password before saving
// userSchema.pre('save', async function (next) {
//     if (!this.isModified('password')) return next();
    
//     try {
//       const salt = await bcrypt.genSalt(10);
//       this.password = await bcrypt.hash(this.password, salt);
//       next();
//     } catch (err) {
//       next(err);
//     }
//   });
//   // Compare hashed password with user input
//   userSchema.methods.comparePassword = function (password) {
//     return bcrypt.compare(password, this.password);
//   };
const User = mongoose.model('User', userSchema);
module.exports = User;