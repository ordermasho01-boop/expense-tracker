
import colors from 'colors'
import cors from "cors";
import path from 'path'
import 'dotenv/config'
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import incomeRoutes from "./routes/incomeRoutes.js";
import expenseRoutes from "./routes/expenseRoutes.js";
import dashboardRoutes from "./routes/dashboardRoutes.js";


import express from 'express';


const app =express()

// app.use((req, res, next) => {
//     console.log(`[Before CORS] Method: ${req.method}, URL: ${req.url}`);
//     next();
// });
app.use(cors({
    origin: 'https://improved-orbit-7vxgprp7jqg4cpqxp-5173.app.github.dev' ,
    credentials: true,
    optionsSuccessStatus: 204,
    methods :['GET','POST',"PUT","DELETE","OPTIONS"],
    allowedHeaders:["Content-Type","Accept", "Authorization", 'Acess-Control-Allow-Origin', 'X-Requesst-With'],
    exposedHeaders: ['Content-Type','X-Content-Range']
}));
// app.use((req, res, next) => { 
//     console.log(`[After CORS] Method: ${req.method}, URL: ${req.url}`); 
//     next(); 
// });
app.use(express.json()); 


connectDB()
const PORT = process.env.PORT || 5000;

//node -e " console.log(require('crypto').randomBytes(64).toString('hex'))"
app.use('/api/auth', authRoutes)
app.use('/api/income', incomeRoutes)
app.use('/api/expense', expenseRoutes)
app.use('/api/dashboard', dashboardRoutes)

app.get('/',async (req, res) => {
    res.send('Hello MERN DEV!')
})
app.listen(PORT, ()=>{
    console.log(`server is running on port: ${PORT}`.yellow.bold.underline)
})