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
 

const User = mongoose.model("User", userModel);

export { User };
