// import mongoose
const mongoose = require('mongoose');

// connection 
mongoose.connect('mongodb+srv://bhavya:archana2006@bhavya.aw3qr.mongodb.net/vimala?retryWrites=true&w=majority&appName=Bhavya')
    .then(() =>{
        console.log('connected!')
    })
    .catch((err)=>{
        console.log(err)
    })