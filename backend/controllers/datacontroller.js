const asyncHandler = require('express-async-handler');
//const data = require('../model/datamodel');
const MongoClient = require('mongodb').MongoClient;

const data = asyncHandler(async(req,res) => {
    const uri = "mongodb://localhost:27017/collection";
    const client = new MongoClient(uri);

    try{
        const database = client.db("collection");
        const collections = database.collection("collection");

        const cursor = collections.find();
        const Data =[];

        await cursor.forEach(function(doc){
            Data.push(doc);
        });

        res.json(Data);
        res.status(200);
    }
    finally{
        await client.close();
    }
})

module.exports = data;