// const express = require('express');
import express from "express";//For that we need to add : "type":"module" in package.json file.
import connectDB from "./config/database.js"; //When you use import then use extension at last i.e. .js
// import userRoute from './Routes/userRoute.js';

// const dotenv = require('dotenv');
// import dotenv from 'dotenv'
// dotenv.config({});

const app = express();

//Routes
app.use("/api/v1/user",userRoute)
 

 
const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
    // connectDB();
    console.log(`Server listen at port ${PORT}`);
})

