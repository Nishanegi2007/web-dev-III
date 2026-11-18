const express=require('express');
const dotenv=require('dotenv');
dotenv.config();
const studentRoutes=require('./routes/student.routes');
const connectDB = require('./config/db');
const app=express();
const PORT=process.env.PORT;

app.use(express.json());

app.use("/",studentRoutes);

connectDB();


app.listen(PORT,()=>{console.log(`Server is running on port ${PORT}`)});