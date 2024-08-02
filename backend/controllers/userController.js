// import bcrypt from 'bcrypt';
// import {User} from "../models/userModel.js"

// export const register = async(req,res)=>{
//     try{
//         let {fullname, username, password, confirmPassword, gender} = req.body;
//         if(!fullname || !username || !password || !confirmPassword || !gender){
//             return res.status(400).json({message:"All fields are required"})
//         }
//         if(password === confirmPassword){
//             return res.status(400).json({message:"Password do not match"})
//         }
        
//         const user = await User.findOne({username});
//         if(user){
//             return res.status(400).json({message:"User already exit please try again"})
//         }
//         const profilePhotoo = `https://img.freepik.com/free-photo/user-profile-icon-front-side-with-white-background_187299-40010.jpg?w=826&t=st=1721383851~exp=1721384451~hmac=65eb57083428db9923ba4a6ea516b8ccfe594fc8ce744150cae19ad19be39000${username}`
//         bcrypt.genSalt(10, (err, salt)=>{
//             bcrypt.hash(password, salt,async (err, hash)=>{
//                 console.log(hash);
//                 let user = await User.create({
//                     fullname,
//                     username,
//                     password : hash,
//                     profilephoto:profilePhotoo,
                     
//                 })
//             })
//         })

//     }
//     catch(error){
//         console.log(error);
//     }
// }

// // export {register};
// // export default register;

 







import { User } from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


export const register = async (req, res) => {
    try {
        const { fullName, username, password, confirmPassword, gender } = req.body;
        if (!fullName || !username || !password || !confirmPassword || !gender) {
            return res.status(400).json({ message: "All fields are required" });
        }
        if (password !== confirmPassword) {
            return res.status(400).json({ message: "Password do not match" });
        }

        const user = await User.findOne({ username });
        if (user) {
            return res.status(400).json({ message: "Username already exit try different" });
        }
        const hashedPassword = await bcrypt.hash(password, 10);

        // profilePhoto
        const maleProfilePhoto = `https://avatar.iran.liara.run/public/boy?username=${username}`;
        const femaleProfilePhoto = `https://avatar.iran.liara.run/public/girl?username=${username}`;

        await User.create({
            fullName,
            username,
            password: hashedPassword,
            profilePhoto: gender === "male" ? maleProfilePhoto : femaleProfilePhoto,
            gender
        });
        return res.status(201).json({
            message: "Account created successfully.",
            success: true
        })
    } catch (error) {
        console.log(error);
    }
};
export const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        if (!username || !password) {
            return res.status(400).json({ message: "All fields are required" });
        };
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(400).json({
                message: "Incorrect username or password",
                success: false
            })
        };
        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (!isPasswordMatch) {
            return res.status(400).json({
                message: "Incorrect username or password",
                success: false
            })
        };
        const tokenData = {
            userId: user._id
        };

        const token = await jwt.sign(tokenData, process.env.JWT_SECRET_KEY, { expiresIn: '1d' });

        return res.status(200).cookie("token", token, { maxAge: 1 * 24 * 60 * 60 * 1000, httpOnly: true, sameSite: 'strict' }).json({
            message: "Login Succesfully...!",
            _id: user._id,
            username: user.username,
            fullName: user.fullName,
            profilePhoto: user.profilePhoto
        });

    } catch (error) {
        console.log(error);
    }
}
export const logout = (req, res) => {
    try {
        return res.status(200).cookie("token", "", { maxAge: 0 }).json({
            message: "logged out successfully."
        })
    } catch (error) {
        console.log(error);
    }
}

//Other users:
export const getOtherUsers = async (req, res) => {
    try {
        const loggedInUserId = req.id;
        const otherUsers = await User.find({ _id: { $ne: loggedInUserId } }).select("-password");//$ne is sign of NotEqual i.e. loggedin user ki chhod kr saare user ki id AND "-password" is indicate that we don't need passwordd.
        return res.status(200).json(otherUsers);
    } catch (error) {
        console.log(error);
    }
}