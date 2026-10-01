import mongoose from "mongoose";

const connectDB = async () => {
  try {

    await mongoose.connect("mongodb://localhost:27017/cyberverse");
    console.log("MongoDB Connected");

  } catch (error) {

    console.error("MongoDB connection failed:", error.message);
    // Don't exit process for testing
    // process.exit(1);

  }
};

export default connectDB;