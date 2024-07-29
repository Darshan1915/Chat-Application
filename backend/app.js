import express from "express";
const app = express();
import dotenv from "dotenv";
import connectDB from "./config/database.js";
dotenv.config();
import userRoute from "./Routes/userRoute.js"

// app.get("/api/v1/user",(req,res)=>{
//     res.send("okk");
//     console.log("okok");
// })
app.use("/api/v1/user", userRoute)

const PORT = process.env.PORT || 3000 ;

app.listen(PORT,(req,res)=>{
    connectDB();
    console.log(`SERVER CONNTECTED AT POST ${PORT}`);
})

 








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


