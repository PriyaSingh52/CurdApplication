require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
//const DB = "mongodb+srv://Priya:123@cluster0.4xgbd.mongodb.net/mernstack?retryWrites=true&w=majority&appName=Cluster0"

require("./db/conn");
const users = require("./models/userSchema");
const cors = require("cors");
const router = require("./routes/router");

const port = 8003;

app.use(cors());
app.use(express.json());

app.use(router);


app.listen(port, () => {
    console.log(`server is start port number ${port}`);
});




// Username- Priya  Password- 123