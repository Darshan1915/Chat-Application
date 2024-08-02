import mongoose from "mongoose";

const coversationModel = mongoose.Schema({
     participants: [{
        type:mongoose.Schema.Types.ObjectId,
        ref: "User"
     }],
     messages: [{
        type:mongoose.Schema.Types.ObjectId,
        ref: "User"
     }]
},{timestamps:true})


export const Conversation = mongoose.model("Conversation",coversationModel); 