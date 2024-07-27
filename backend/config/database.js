import mongoose from "mongoose"; 

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/SCATCH")
        console.log("DB connected");
    } catch (error) {
        console.error("DB connection error:", error);
    }
};

export default connectDB;


// // Method 1 : Environment Configuration (dotenv): Ensure that dotenv is configured correctly to load the environment variables from your .env file.
// import mongoose from "mongoose";
// import dotenv from "dotenv";
// import config from "config";

// dotenv.config();

// const connectDB = async () => {
//     try {
//         await mongoose.connect(process.env.MONGODB_URI);
//         console.log("DB connected");
//     } catch (error) {
//         console.error("DB connection error:", error);
//     }
// };

// export default connectDB;




//Method 2 : Using config.get from config Library: If you're using the config library, make sure you have set up your configuration files correctly and are importing the config module properly.

// import mongoose from "mongoose";
// import config from 'config';

// const connectDB = async () => {
//     await mongoose.connect(config.get("MONGODB_URI"))
//     .then(() => {
//         console.log("DB connected");
//     })
//     .catch((error) => {
//         console.log(error);
//     });
// };

// export default connectDB;



// Ensure your configuration files (default.json or other environment-specific files) are set up properly:
// {
//     "MONGODB_URI": "mongodb://127.0.0.1:27017"
// }