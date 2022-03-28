const express = require("express")

const User = require("../models/todo.model")

const router= express.Router();
router.post("/",
body("title").isString(),

async(req,res)=>{
    try{
const todo = await User.create({
    title: req.body.title,
    

})
return res.send({todo});
    }catch(err){
return res.status(401).send({message: err.message});
    }
}

)
module.exports=router;