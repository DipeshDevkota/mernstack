const mongoose = require("mongoose");
const dotenv = require("dotenv");





const connectDB= async()=>{

    try{
  const connect= await mongoose.connect(
    `${process.env.MONGODB_URI}/${process.env.DB_NAME}`
  );
  console.log(`\n MongoDB connected !! DB HOST:${connect.connection.host}`);
    }
    catch(error){
        console.log("MONGODB connection error",error);
        process.exit(1);
    }
};
module.exports= connectDB;