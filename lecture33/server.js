const bcrypt=require('bcrypt');
const password1="John@123"
const password2="John@123"
const hashPassword=async(password)=>{
    const salt =await bcrypt.genSalt(10);
    console.log("Salt",salt);
    const hasdhedPassword=await bcrypt.hash(password,salt);
    console.log("Hashed Password",hasdhedPassword);
    const isMatch=await bcrypt.compare(password1,hasdhedPassword)
    console.log("is Match:",isMatch)
}

hashPassword(password1);

// hashPassword(password2);