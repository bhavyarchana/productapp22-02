// 1.import
const express = require('express')
require("./connection")
const pModel = require("./model/product" )

// 2.intialize
const app = express()

// mid
app.use(express.json());

// 3.api creation
app.get('/hlo',(req,res)=>{
    res.send("hello world")
})

// add api
app.post('/',async(req,res)=>{
    try {
        await pModel(req.body).save()
        res.send({message:"data added"})
    } catch (error) {
        console.log(error);
    }
})

// view api
app.get('/view',async(req,res)=>{
    try {
         const data=await pModel.find()
        res.send(data);
    } catch (error) {
        console.log(error);
    }
})
// deelete api
app.delete('/:id',async(req,res)=>{
    try {
         await pModel.findByIdAndDelete(req.params.id)
        res.send({message:"data delete"});
    } catch (error) {
        console.log(error);
    }
})
// update
app.put('/up/:id',async(req,res)=>{
    try {
         await pModel.findByIdAndUpdate(req.params.id,req.body)
        res.send("updated");
    } catch (error) {
        console.log(error);
    }
})




// 4.port setting
app.listen(3004,()=>{
    console.log("server is running")
})

