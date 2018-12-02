const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    username:{
        type: String,
        required: true
    },
    phoneNo:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true
    },
    dob:{
        type:String,
        required: true
    },
    bloodGroup:{
        type:String,
        required: true
    },
    address:{
        type:String,
        required: true
    },
    district:{
        type:String,
        required: true
    },
    pin:{
        type:String,
        required: true
    }
})

const user = module.exports = mongoose.model('User', UserSchema);