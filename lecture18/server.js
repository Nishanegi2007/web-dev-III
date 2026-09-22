const express=require("express");

const app=express();    
const port=3000;

app.get("/",(req,res,next)=>{
    let age=16;
    try{if (age<=18){
        throw new error("You are not allowed to access this page");
    }else{
        console.log("Welcome to the page");
        res.send("Welcome to the page");
    }
}
catch(err)
{
    next(err);
}})


app.use(((req,res)=>{ //invalid route middleware
    res.status(404).send({
        success:false,
        message:"Page not found"
    })
}))

app.use(((err,req,res,next)=>{ //error handling middleware
    res.status(500).send({
        success:false,
        message:err.message
    })
}));




app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})