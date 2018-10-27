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

function verifyToken(req, res, next) {
    
    const token = req.get('token') || req.body.token || req.query.token;
    if (!token) return res.json({ success: false, message: "No Token Provided." });
    jwt.verify(token, JWT_SECRET, (err, decodedData) => {
        if (err) res.json({ success: false, message: "Invalid Token" });
        User.findById(decodedData._id, (err, user) => {
            if (err) res.json({ success: false, message: "Invalid Token" });
            req.user = user; 
            next(); 
        })
    })
};

module.exports = { signToken, verifyToken };

module.exports = { signToken };