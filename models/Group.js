const 
    mongoose = require('mongoose'),

    GroupSchema = mongoose.Schema({
        name: String,
        description: String, 
        location: String,
        date: String, 
        time: String, 
        picture: String
    });

    const Group = mongoose.model('Group', GroupSchema);

    module.exports = Group;