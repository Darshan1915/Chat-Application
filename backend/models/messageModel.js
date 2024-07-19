import mongoose from "mongoose";

const messageModel = mongoose.Schema({
    senderID : {
        //Yha ham referance create krenge mtlb user ki ID hame usermodel se milegi to ham messagemodel me wo ID store krenge. Yani ham userMOdel ko refer krenge.
        type : mongoose.Schema.Types.ObjectId,
        ref:"User" ,
        required: true,                                         
    },
    receiverID : {
        type : mongoose.Schema.Types.ObjectId,
        ref:"User" ,
        required: true,                                         
    },
    message:{
        type:String,
        required:true
    },


},{timestamps:true})

export const Message = mongoose.model("Message",messageModel); 