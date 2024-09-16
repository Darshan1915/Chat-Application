import {Conversation} from "../models/conversationModel.js"
import { Message } from "../models/messageModel.js"
// import { getReceiverSocketId, io } from "../socket/socket.js";

export const sendMessage = async (req,res) => {
    try {
        const senderID = req.id;
        const receiverID = req.params.id;

        const {message} = req.body;

        let gotConversation = await Conversation.findOne({
            participants:{$all : [senderID, receiverID]},
        });

        if(!gotConversation){
            gotConversation = await Conversation.create({
                participants:[senderID, receiverID]
            })
        };
        const newMessage = await Message.create({
            senderID,
            receiverID,
            message
        });
        if(newMessage){
            gotConversation.messages.push(newMessage._id);
        };
        

        await Promise.all([gotConversation.save(), newMessage.save()]);

        return res.json({message:"Message snet successfully...!!"})
         
//         // SOCKET IO
//         const receiverSocketId = getReceiverSocketId(receiverId);
//         if(receiverSocketId){
//             io.to(receiverSocketId).emit("newMessage", newMessage);
//         }
//         return res.status(201).json({
//             newMessage
//         })
    } catch (error) {
        console.log(error);
    }
}
export const getMessage = async (req,res) => {
    try {
        const receiverID = req.params.id;
        const senderID = req.id;
        const conversation = await Conversation.findOne({
            participants:{$all : [senderID, receiverID]}
        }).populate("messages"); 
        console.log(conversation);
        
        return res.status(200).json(conversation?.messages);
    } catch (error) {
        console.log(error);
    }
}

