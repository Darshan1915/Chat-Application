import mongoose from "mongoose";

const userModel = mongoose.Schema({
    fullname:{
        type: String,
        required: true
    },
    username:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true
    },
    profilephoto:{
        type:String
    },
    gender:{
        type: String,
        enum:["male","female"],
        required: true
    }


},{timestamps:true})

// module.exports =  mongoose.model("user", adminSchema);
export const user = mongoose.model("User",userModel); 