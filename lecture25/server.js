const express=require('express');
const studentRoutes=require('./routes/student.routes');
const connectDB = require('./config/db');
const app=express();
const  PORT=3000;

app.use(express.json());

app.use("/",studentRoutes);

connectDB();


app.listen(PORT,()=>{console.log(`Server is running on port ${PORT}`)});