import mongoose from "mongoose";

const conectdb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("connected to database");
  } catch (err) {
    console.log("error connecting to db!", err);
  }
};

export default conectdb;
