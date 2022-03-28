const mongoose = require("mongoose")

module.exports = ()=>{
    mongoose.connect("mongodb+srv://Abhi007:1234@cluster0.9itcg.mongodb.net/Cluster0?authSource=admin&replicaSet=atlas-jpwios-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true");
}