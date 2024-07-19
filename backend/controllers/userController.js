import { Message } from "../models/messageModel";
import bcrypt from 'bcrypt';

const register = async(req,res)=>{
    try{
        let {fullname, username, password, confirmPassword, gender} = req.body;
        if(!fullname || !username || !password || !confirmPassword || !gender){
            return res.status(400).json({message:"All fielda are required"})
        }
        if(password === confirmPassword){
            return res.status(400).json({message:"Password do not match"})
        }

        const user = await User.findOne({username});
        if(user){
            return res.status(400).json({message:"User already exit please try again"})
        }
        const profilePhotoo = `https://img.freepik.com/free-photo/user-profile-icon-front-side-with-white-background_187299-40010.jpg?w=826&t=st=1721383851~exp=1721384451~hmac=65eb57083428db9923ba4a6ea516b8ccfe594fc8ce744150cae19ad19be39000${username}`
        bcrypt.genSalt(10, (err, salt)=>{
            bcrypt.hash(password, salt,async (err, hash)=>{
                console.log(hash);
                await User.create({
                    fullname,
                    username,
                    password : hash,
                    profilephoto:profilePhotoo,
                    gender
                })
            })
        })
        // await User.create({
        //     fullname,
        //     username,
        //     password,
        //     profilephoto,
        //     gender
        // })
    }
    catch(error){
        console.log(error);
    }
}