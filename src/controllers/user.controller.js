const express = require("express")

const User = require("../models/user.model")

const router= express.Router();
router.post("/",
body("firstName").isString(),
body("lastName").isString(),

body("email").isString(),

body("password").isString(),
async(req,res)=>{
    try{
const user = await User.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,

    email: req.body.email,

    password: req.body.password,

})
return res.send({user})
    }catch(err){
return res.status(401).send({message: err.message});
    }
}

)
module.exports=router;