// import mongoose from "mongoose";

// const userModel = mongoose.Schema({
//     fullname:{
//         type: String,
//         required: true
//     },
//     username:{
//         type:String,
//         required:true,
//         unique:true,
//     },
//     password:{
//         type:String,
//         required:true
//     },
//     profilephoto:{
//         type:String
//     },
//     gender:{
//         type: String,
//         enum:["male","female"],
//         required: true
//     }


// },{timestamps:true})
 

// const User = mongoose.model("User", userModel);

// export { User };




import mongoose from "mongoose";

const userModel = new mongoose.Schema({
    fullName:{
        type:String,
        required:true
    },
    username:{
      type:String,
      required:true,
      unique:true
    },
    password:{
        type:String,
        required:true
    },
    profilePhoto:{
        type:String,
        default:""
    },
    gender:{
        type:String,
        enum:["male", "female"],
        required:true
    }
}, {timestamps:true});
export const User = mongoose.model("User", userModel);
