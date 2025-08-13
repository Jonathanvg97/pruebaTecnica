import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

export const app = express();

app.use(cors());
app.use(express.json());

app.use(cookieParser());
app.use(
  cors({
    origin: "*", 
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
  })
);
app.use(express.urlencoded({ extended: true }));
