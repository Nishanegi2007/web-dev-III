const jwt=require("jsonwebtoken");
const data ={
    _id:"dsfgfhfdsadfgbnmhgfd"
}

const token=jwt.sign(data,"random-secret-key",{expiresIn:"2d"});
console.log("TOken:",token);

const decoded=jwt.verify(token,"random-secret-key");
console.log("Decoded:",decoded);