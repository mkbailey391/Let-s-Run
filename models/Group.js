const 
    mongoose = require('mongoose');

    const GroupSchema = new mongoose.Schema({
        name: String,
        description: String, 
        location: String,
        date: String, 
        time: String, 
        image: String,
        creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User'}
    });

    const Group = mongoose.model("Group", GroupSchema);

    module.exports = Group;