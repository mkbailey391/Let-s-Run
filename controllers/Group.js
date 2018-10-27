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
       res.json({ success: true, createGroup});
   })
}

exports.show = (req, res) => {
    Group.findById(req.params.id, (err, group) =>{
        if (err) res.json ({success: false, err});
        res.json({ success: true, group});
    })
}

exports.update = (req, res) => {
    let { body, params } = req;
    Group.findByIdAndUpdate(params.id, body, { new: true }, (err, updateGroup) => {
        if (err) res.json({success: false, err});
        res.json({ success: true, updateGroup});
    })
}

exports.delete = (req, res) => {
    let { id } = req.params;
    Group.findByIdAndDelete(id, (err, deleteGroup) => {
        if (err) res.json({ success: false, err});
        res.json({ success: true, deleteGroup});
    })
}