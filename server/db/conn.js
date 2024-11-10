const mongoose = require("mongoose");

const DB = "mongodb+srv://Priya:123@cluster0.4xgbd.mongodb.net/mernstack?retryWrites=true&w=majority&appName=Cluster0"


mongoose.connect(DB,{
    useNewUrlParser:true,
    useUnifiedTopology:true
   
}).then(()=> console.log("connection start")).catch((error)=> console.log(error.message));