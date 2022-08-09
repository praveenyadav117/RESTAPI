const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
    firstname : {
        type:String,
        required:true

    },
    lastname:{
        type:String,
        required:true
    },
    
    email:{
        type:String,
        required:true,
        validate(value){
            if(!validator.isEmail(value)){
            throw new Error("Invalid Email");

            }
        }
    },
    phone:{
        type:Number,
        min:10,
        required:true
    },
    account:{
        type:Number,
        min:12,
        required:true,
        unique:[true,"Account Number is already exits."]
    },
    address:{
        type:String,
        required:true
    },
    balance:{
        type:Number,
        required:true
    }

})

// new collection usiong models

const User = new mongoose.model('User',userSchema);

module.exports = User;