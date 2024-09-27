import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import connect from "./database/db.js";
import cors from "cors";
import crypto from "crypto";
import { Cashfree } from "cashfree-pg";
import router from "./routes/route.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const corsOptions = {
  origin: ["https://billing.magicscale.in", "http://localhost:5173"],
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.use("/api", router);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

connect()
  .then(() => {
    console.log("Server connected to database");
  })
  .catch((error) => {
    console.error("Database connection failed:", error);
  });
