const 
    Group = require('../models/Group'),
    User = require('../models/User');

exports.index = (req, res) => {
   Group.find({}, (err, groups) => {
       if (err) res.json({success: false, err});
       res.json({ success: true, groups});
   })
}

exports.create = (req, res) => {
    let group = {...req.body, ...{ creator: req.user.id }}
   Group.create(group, (err, createGroup) => {
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
};

exports.joinGroup = (req, res) => {
    // User is added as a member to the group 
    let { id } = req.params;
    Group.findById(id, (err, group) =>{
       group.members.push(req.user.id) 
       console.log("group", group)

       group.save(( err, group )=>{
           if (err) res.json({ success: false, err});
          // the group is added to the user's groups
          User.findById(req.user.id, (err, user) => {
              console.log("user", user)
              user.groups.push(group.id)

              user.save(( err, user ) => {
                  if (err) res.json({ success: false, err});
                  res.json({ success: true, user})

              })
          })

       })
    })
     
    // pushing the value to each of those arrays
}

exports.leaveGroup = (req, res) => {
    let { id } = req.params; 
    Group.findById(id, (err, group) =>{
        group.members.remove(req.user.id)
        console.log("group", group)
        
        group.save(( err, group ) =>{
            if (err) res.json({ success: false, err });
            //the group is removed from the user's groups
            User.findById(req.user.id, (err, user) => {
                console.log("user", user)
                user.groups.remove(group.id)

                user.save(( err, user ) => {
                    if (err) res.json({ success: false, user});
                    res.json({ success: true, user})
                })
            }) 
        })
    })
};
