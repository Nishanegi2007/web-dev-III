const express=require('express');
const app=express();
const PORT=3000;

// app.get("/students",(req,res)=>{
app.get("/students/:name",(req,res)=>{
    // console.log(req.body);
    console.log(req.url);
    console.log(req.method);
    console.log(req.params.name);
    res.send("Hello ");
    // res.status(404).send("Hello " + req.params.name);
})

app.get("/students",(req,res)=>{
    console.log(req.url);
    console.log(req.query.cgpa);
    res.send("Hello Students");

});

app.listen(PORT,()=>console.log("server is running"));

