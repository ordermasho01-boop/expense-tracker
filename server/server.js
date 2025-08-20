import colors from "colors";
import cors from "cors";

import "dotenv/config";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import incomeRoutes from "./routes/incomeRoutes.js";
import expenseRoutes from "./routes/expenseRoutes.js";
import dashboardRoutes from "./routes/dashboardRoutes.js";

import express from "express";

const app = express();

// Allow requests from specific origin
const allowedOrigins = [
  "https://cuddly-parakeet-x5qpp5rq9jvvf9v5x-5173.app.github.dev",
];

app.use(
  cors({
    origin: allowedOrigins,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "HEAD"],
    credentials: true,
    maxAge: 36000, // if you need to send cookies or authorization headers
  })
);
app.use(express.json());

connectDB();
const PORT = process.env.PORT || 5000;

//node -e " console.log(require('crypto').randomBytes(64).toString('hex'))"
app.use("/api/auth", authRoutes);
app.use("/api/income", incomeRoutes);
app.use("/api/expense", expenseRoutes);
app.use("/api/dashboard", dashboardRoutes);

app.get("/", async (req, res) => {
  res.send("Hello MERN DEV!");
});
app.listen(PORT, () => {
  console.log(`server is running on port: ${PORT}`.yellow.bold.underline);
});
