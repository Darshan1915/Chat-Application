import express from 'express';
import { register } from '../controllers/userController.js';
 
const router = express.Router();

router.route("/register").post(register);

// router.route("/").get((req,res)=>{
//     res.send(" get user");
//     console.log("get user");
// })
// router.route("/").post((req,res)=>{
//     res.send(" create user");
//     console.log("create user");
// })


export default router;
