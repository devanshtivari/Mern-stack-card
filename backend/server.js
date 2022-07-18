const express = require('express');
const cors = require('cors');
const connectDb = require('./db/db');
const dataroute = require('./routes/dataroutes');

const app = express();
connectDb();
app.use(cors());
app.use(express.json());

app.get('/' , (req , res)=>{
    res.send("The api is running successfully");
    res.status(400);
})

app.use('/data' , dataroute);

app.listen(3000 , function(){
    console.log("Server started succesfully at port 3000");
})
