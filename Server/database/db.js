import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

async function connect() {
  mongoose.set("strictQuery", true);
  const db = await mongoose.connect(process.env.ATLAS_URI);
  return db;
}

export default connect;
