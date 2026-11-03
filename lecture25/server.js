const express=require('express');
const mongoose=require('mongoose');
const Student=require('./model/student.model');
const app=express();
const  PORT=3000;

app.use(express.json());

app.get('/api/students',async(req,res)=>{
    try{
        const student =await Student.find();
        res.json(student);
    }catch(err){
        res.status(500).json({success:false,message:err.message});
    }
})
app.get('/api/students/:id',async (req,res)=>{
    try{
        const student=await Student.findById(req.params.id);
        if(!Student){
            return res.status(404).json({success:false,message:"student not found"})
        }
        res.json(student);
    }catch(err){
        res.status(500).json({success:false,message:err.message});
    }
})

app.post('/api/students',async(req,res)=>{
    try{
        const student=await Student.create(req.body);
        res.status(201).json({message:"create successfully",student});


    }catch(err){
        res.status(500).json({success:false,message:err.message});
    }
})

app.put('/api/students/:id',async(req,res)=>{
    try{
        const student=await Student.findByIdAndUpdate(req.params.id,req.body,{new:true});
        if(!student){
            return res.status(404).json({success:false,message:"student not found"});
        }
        res.json({message:"update successfully",student});
    }catch(err){
        res.status(500).json({success:false,message:err.message});
    }
})

app.delete('/api/students/:id',async(req,res)=>{
    try{
        const student=await Student.findByIdAndDelete(req.params.id);
        if(!student){
            return res.status(404).json({success:false,message:"student not found"});
        }
    }catch(err){
        res.status(500).json({success:false,message:err.message});
    }
})

mongoose.connect('mongodb://localhost:27017/collageDB').then(()=>{
    console.log('Connected to MongoDB');
}).catch((err)=>{
    console.log('Error connecting to MongoDB', err);
})


app.listen(PORT,()=>{console.log(`Server is running on port ${PORT}`)});