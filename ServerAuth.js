const 
    jwt = require('jsonwebtoken'),
    User = requrie('./models/User'),
    { JWT_SECRET } = process.env;

// Function for creating tokens
function signToken(user) {
    const userData = user.toObject()
    delete userData.password; 
    return jwt.sign(userData, JWT_SECRET);
};

module.exports = { signToken };