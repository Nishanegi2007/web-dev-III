const express=require("express");
const app=express();
const port=3000;
const morgan=require("morgan")

// const loginMiddleware=(req,res,next)=>{         //custom middleware
//     console.log("request method",req.method);
//     console.log("request url",req.url);
//     next();                                 //next is used to pass the control to the next middleware function in the stack.
//                         // If we don't call next(), the request will be left hanging and will not proceed to the next middleware or 
//                         //route handler.
// }

// const  logger=(req,res,next)=>{
//     console.log("request method",req.method);
//     console.log("request url",req.url);
//     console.log("request time",new Date().toLocaleString());
//     next();
// }

const apicheckMiddleware=(req,res,next)=>{
    if (req.query.API_KEY=="12345"){
        next();
    }else{
        res.status(401).send("Unauthorized");
    }
}

// app.use(loginMiddleware);
// app.use(apicheckMiddleware);

app.use(morgan());   //morgan is a third-party middleware that logs the details of incoming requests to the console.S
// app.use(logger);   //app.use() is used to register middleware functions that will be executed for every incoming request to the server.

app.get("/",(req,res)=>{
    console.log("hello world");
    res.send("hello world");
})

app.get("/students",apicheckMiddleware,(req,res)=>{     //calling middleware functions in the route handler
    console.log("hello students");
    res.send("hello students");
})

app.listen(port,()=>{
    console.log("sever is running");
})