const 
    mongoose = require('mongoose'),
	bcrypt = require('bcrypt-nodejs'),
	//groupSchema = require('../Models/Group').schema,
	userSchema = new mongoose.Schema({
		name: { type: String },
		email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        gender: { type: String },
        age: { type: Number },
        location: { type: String },
        training: { type: String },
        pace: { type: String },
        goal: { type: String },
        level: { type: String },
        groups: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Group'}]
    })
    
// adds a method to a user document object to create a hashed password
userSchema.methods.generateHash = function(password) {
	return bcrypt.hashSync(password, bcrypt.genSaltSync(8))
}

// adds a method to a user document object to check if provided password is correct
userSchema.methods.validPassword = function(password) {
	return bcrypt.compareSync(password, this.password)
}

// middleware: before saving, check if password was changed,
// and if so, encrypt new password before saving:
userSchema.pre('save', function(next) {
	if(this.isModified('password')) {
		this.password = this.generateHash(this.password)
	}
	next()
})

const User = mongoose.model('User', userSchema)
module.exports = User;