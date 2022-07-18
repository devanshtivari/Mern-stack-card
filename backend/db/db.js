const mongoose = require('mongoose');

const uri = 'mongodb://localhost:27017/collection';

const connectDb = async() => {
    try{
        const conn = await mongoose.connect(uri , {
            useNewUrlParser : true,
            useUnifiedTopology : true,
        });

        console.log(`Mongo db connected successfully : ${conn.connection.host}`);
    }
    catch(error){
        console.log(`error occured : ${error.message}`);
        process.exit();
    }
}

module.exports = connectDb;