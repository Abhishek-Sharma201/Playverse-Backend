import mongoose from "mongoose";

export const connectDB = async (req, res) => {
  try {
    const cnn = mongoose.connect(process.env.connectionString);
    console.log(`DB connected to Host: ${(await cnn).connection.host}`);
  } catch (error) {
    console.log(`Error connecting DB: ${error.message}`);
  }
};
