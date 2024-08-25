import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import 'dotenv/config';
import authRoute from "./routes/auth.route.js";
import postRoute from "./routes/post.route.js";

const PORT = process.env.PORT || 8000;
const app = express();

app.use(express.json());
app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));
app.use(cookieParser());


app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });