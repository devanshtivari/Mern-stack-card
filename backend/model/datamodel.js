const mongoose = require('mongoose');

const datamodel = mongoose.Schema({
    name : {type: "string" , required: true},
    link : {type: "string" , required: true}
})

const data = mongoose.model("collections" , datamodel);

module.exports = data;