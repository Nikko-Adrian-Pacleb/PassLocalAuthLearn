const mongoose = require("mongoose");
const asynchandler = require("express-async-handler");

const connectDB = asynchandler(async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB connected: ${conn.connection.host}`.cyan.underline); // MongoDB connected: localhost
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
});

module.exports = connectDB;
