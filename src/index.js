const express = require("express")
const connect = require("./config/db")
const userController = require("./controllers/user.controller")
const todoController = require("./controllers/todo.controller")
const {register,login}= require("./controllers/auth.controller.js")
const app = express();


app.use(express.json());
app.use("/users",userController);
app.use("/register",register)
app.use("/login",login)
app.use("/todo",todoController);



const start = async()=>{
    await connect();
    app.listen(2000,()=>{
        console.log("Listening to the port 2000");
    });
}
start();

