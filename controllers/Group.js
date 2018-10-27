const Group = require('../models/Group');

exports.index = (req, res) => {
   Group.find({}, (err, groups) => {
       if (err) res.json({success: false, err});
       res.json({ success: true, groups});
   })
}

exports.create = (req, res) => {
   Group.create(req.body, (err, createGroup) => {
       if (err) res.json({success: false, err});
       res.json({ success: false, createGroup});
   })
}