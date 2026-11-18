const express=require('express');
const app=express();
const PORT=3000;

app.use(express.json());  //middleware

// app.get("/",(req,res)=>{
//     res.send("Hello World");
// })

// app.get("/about",(req,res)=>{
//     res.send("welcome to about page");
// })

const products =[
    {
        id:1,
        name:"pen",
        price:50
    },
    {id:2,
        name:"pencil",
        price:5},
    {
        id:3,
        name:"notebook",
        price:100
        }
]

// app.get("/products",(req,res)=>{  
app.get("/api/products",(req,res)=>{        //read operaation
    res.json(products);
});

app.get("/api/products/:id",(req,res)=>{        //read operaation
    const id =req.params.id;
    console.log(id);
    const results=products.find((p)=>p.id==id);
    if(results==undefined){
        res.status(404).json({message:"product not found"});
    }
    res.json({message:"products by id"},results);
})

app.get("/api/products/:name",()=>{
    const name=req.params.name;
    const results=products.find((p)=>p.name==name);
    if(results==undefined){
        res.status(404).json({message:"product not found"});
    }
    res.json({message:"products by name"},results);
})

app.post("/api/products",(req,res)=>{        //create operation
    const product=req.body;
    products.push(product);
    res.json({success:true,product});
})

app.put("/api/products/:id",(req,res)=>{        //update operation
    const id =req.params.id;
    const product=req.body
    const result=products.find((p)=>p.id==id);
    if(result==undefined){
        res.status(404).json({message:"product not found"});
    }
    result.name=product.name;
    result.category=product.category;
    result.price=product.price;
    res.json({success:true,result});
})

app.delete("/api/products/:id",(req,res)=>{        //delete operation
    const id =req.params.id;
    const result=products.find((p)=>p.id==id);
    if(result==undefined){
        res.status(404).json({message:"product not found"});
    }
    const  index=products.indexOf(result);
    products.splice(index,1);
    res.json({success:true,message:"product deleted"});
})

app.listen(PORT,()=>console.log("server is running"));
