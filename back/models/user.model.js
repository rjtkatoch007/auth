import mongoose from "mongoose";

const userschema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    lastLogin:{
        type:Date,
        default:Date.now
    },
    isVarified:{
        type:Boolean,
        default:false
    },
    resetPasswordToken: String,
    resetPasswordExpiresAt: Date,
    varificationToken: String,
    varificationTokenExpiresAt: Date
},{timestamps:true})

export const User = mongoose.model('User', userschema)