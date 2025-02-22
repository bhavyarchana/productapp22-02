// import mongoose
const mongoose = require('mongoose');

var productSchema = mongoose.Schema({
    Name:String,
    Price:Number,
    Stock:Number,
    description:String,
    Image:String
})

// crate model
var productModel=mongoose.model("product",productSchema);

// export model
module.exports = productModel;