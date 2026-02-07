import express from "express";
import dotenv from "dotenv";
import connectDb from "./config/db.js";
import authRouter from "./routes/authRoutes.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import userRouter from "./routes/userRoutes.js";
import messageRouter from "./routes/messageRoutes.js";
import { app, server } from "./socket/socket.js";

dotenv.config();

const PORT = process.env.PORT || 5000;

const allowedOrigins = [
  "http://localhost:5173",
  "https://chat-app-silk-ten-63.vercel.app"
];

app.use(cors({
    origin:allowedOrigins,
    credentials:true
}))
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/message" , messageRouter)

app.get("/",(req,res) => {
    res.send("Hello");
})


server.listen(PORT,()=>{
    connectDb();
    console.log("Server running at PORT NO:" , PORT);
})