import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { envs } from "@utils/config/enviroments";

export const app = express();

app.use(cors());
app.use(express.json());

app.use(cookieParser());
app.use(
  cors({
    origin: envs.FRONTEND_BASE_URL,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
  })
);
app.use(express.urlencoded({ extended: true }));
