import express from "express"; 
import connectDB from "./config/database.js";
// import userRout from "./Routes/userRoute.js" 

import dotenv from 'dotenv'
 dotenv.config({});

const app = express();

// Routes
// app.use("/api/v1/user");
 
const PORT = process.env.PORT ||  6000;
app.listen(PORT,()=>{
    connectDB();
    console.log(`Server listen at port ${PORT}`);
})




 