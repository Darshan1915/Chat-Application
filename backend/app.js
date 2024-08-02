// import express, { urlencoded } from "express";

// import dotenv from "dotenv";
// import connectDB from "./config/database.js";
// import usersRoute from "./Routes/usersRoute.js"
// dotenv.config();

// const app = express();

// //Middleware
// app.use(express.json());
// app.use(express.urlencoded({extended:true}));

// //Routes
// app.use("/api/v1/users", usersRoute)

// const PORT = process.env.PORT || 3000 ;

// app.listen(PORT,(req,res)=>{
//     connectDB();
//     console.log(`SERVER CONNTECTED AT POST ${PORT}`);
// })





// const express = require('express')// method-1
import express from "express"; // method-2
import dotenv from "dotenv"; 
import connectDB from "./config/database.js";
import usersRoute from "./Routes/usersRoute.js"
import messageRoute from "./routes/messageRoute.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import { app,server } from "./socket/socket.js";
dotenv.config({});

 
const PORT = process.env.PORT || 5000;

// middleware
app.use(express.urlencoded({extended:true}));
app.use(express.json()); 
app.use(cookieParser());
const corsOption={
    origin:'http://localhost:3000',
    credentials:true
};
app.use(cors(corsOption)); 


// routes
app.use("/api/v1/users",usersRoute); 
app.use("/api/v1/messages",messageRoute);
 

server.listen(PORT, ()=>{
    connectDB();
    console.log(`Server listen at prot ${PORT}`);
});










// import express from 'express'; 
// import connectDB from './config/database.js';
// import dotenv from 'dotenv';
// // import userRout from './Routes/userRout.js';

// dotenv.config();

// const app = express();

// // Middleware
// app.use(express.json()); // This allows your app to parse JSON payloads

// // Routes
// // app.use('/api/v1/user', userRout);
// app.get("/api/register",(req,res)=>{
//     res.send("okkk");
// })

// const PORT = process.env.PORT || 6000;

// app.listen(PORT, async () => {
//   try {
//     await connectDB();
//     console.log(`Server listening at port ${PORT}`);
//   } catch (error) {
//     console.error('Error connecting to the database', error);
//    }
// });


