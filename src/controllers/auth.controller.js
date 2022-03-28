const User = require("../models/user.model")
const jwt = require("jsonwebtoken")
require('dotenv').config()


const generateToken = (user)=>{
    return jwt.sign({user},process.env.SECRET_KEY);
}
const register = async (req,res)=>{
    try{
   let user = await User.findOne({email: req.body.email});
   if(user){
       return res.send(200).send({message: "Email already have"})
   } 
   user = await User.create(req.body);
   const token = generateToken(user);
   return res.status(200).send({user,token});
    }catch(err){
        res.status(401).send({message: err.message});
    }
}


const login = async(req,res)=>{
    try{
const user = await User.findOne({email: req.body.email});
if(!user){
    return res.status(401).send("Wrong Email oops");
}
const match = user.checkpassword(req.body.password)
if(!match){
    return res.status(401).send("Wrong password oops");
    
}
const token = generateToken(user);
return res.status(200).send({user,token});
    }catch(err){
        res.status(401).send({message: err.message});
    }
}
module.exports={register,login};