const products=require('../data/data.js');


const getProducts=(req,res)=>{        //read operaation
    res.json(products);
}
const getProductById=(req,res)=>{        //read operaation
    const id =req.params.id;
    console.log(id);
    const results=products.find((p)=>p.id==id);
    if(results==undefined){
        res.status(404).json({message:"product not found"});
    }
    res.json(results);
}
const createProduct=(req,res)=>{        //create operation
    const product=req.body;
    products.push(product);
    res.json({success:true,product});
}
const updateProduct=(req,res)=>{        //update operation
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
}
const deleteProduct=(req,res)=>{        //delete operation
    const id =req.params.id;
    const result=products.find((p)=>p.id==id);
    if(result==undefined){
        res.status(404).json({message:"product not found"});
    }
    const  index=products.indexOf(result);
    products.splice(index,1);
    res.json({success:true,message:"product deleted"});
}
const searchProducts= (req,res)=>{
    const {name,category,price}=req.query
    let result;
    if (name){
        result=products.filter((product)=>product.name===name);

    }
    if (category){
        result=products.filter((product)=>product.category==category);

    }
    if (price){
        result=products.filter((product)=>product.price===Number(price));
    }
    res.json({
        total:result.length,
        result
    });

}

module.exports={getProducts,getProductById,createProduct,updateProduct,deleteProduct,searchProducts};