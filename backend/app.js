import express from "express";
import mongoose from "mongoose";
import auth from "./routes/auth.js";
import list from "./routes/list.js";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to MongoDB!");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {});

app.use("/api/v1", auth);
app.use("/api/v2", list);

app.listen(3000, () => {
  console.log("App is listening on port 3000");
});
