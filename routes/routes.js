const express = require('express');
const router = express.Router();

const User = require('../models/model');

router.get('/contacts', (req, res, next)=>{
    User.find(function(err, contacts){
        res.json(contacts);
    })
});

router.post('/', (req, res, next)=>{
    let newUser = new User({
        username: req.body.username,
        phoneNo: req.body.phoneNo,
        email: req.body.email,
        dob: req.body.dob,
        bloodGroup: req.body.bloodGroup,
        address: req.body.address,
        district: req.body.district,
        pin: req.body.pin
    });

    newUser.save((err, user)=>{
        if(err) {
            res.json({msg: 'Failed to add contact'});
        }
        else {
            res.json({msg: 'Contact added successfully'});
        }
    });
});

module.exports = router;