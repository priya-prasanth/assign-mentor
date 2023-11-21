import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./Database/dbConfig.js";
import mentorRouter from "./Routers/MentorRouter.js";
import studentRouter from "./Routers/StudentRouter.js";

let port = process.env.PORT;

const app = express();
app.use(cors());
app.use(express.json());

connectDB();

app.use("/Mentor", mentorRouter);
app.use("/Student", studentRouter);

app.listen(port, () => {
  console.log("App is listening at-", port);
});
