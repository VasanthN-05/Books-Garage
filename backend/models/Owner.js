const mongoose  = require('mongoose')
const { Schema } = mongoose;
//creating a schema for user 
const ownerSchema = new Schema({

    name:{
        type : String,
        required : true
    },
    email:{
        type : String,
        required : true,
        unique : true
    },
    password:{
        type : String,
        required : true
    }
});
const User = mongoose.model('owner',ownerSchema)
module.exports = User