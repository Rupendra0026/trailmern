const dotenv=require("dotenv");
dotenv.config();
const express=require("express");
const app=express();
app.use(express.json());
const cors=require('cors');
app.use(cors());
app.use(express.json());
const bodyparser=require("body-parser");
const PORT=5000||process.env.PORT;
const mongoose=require("mongoose");
mongoose.connect(process.env.DATABASE,({ useNewUrlParser: true, useUnifiedTopology: true })).then(()=>{
    console.log("connected to database");
})
const dataSchema=require('./models/dataschema');

app.post('/getdata',async(req,res)=>{
    const val=await req.body.val;
    console.log(val);
    const data=await new dataSchema({name:val});
    data.save();
    const x=await dataSchema.find();
    res.json({msg:"data saved",val:x});
})
app.get('/displaydata',async(req,res)=>{
    const data=await dataSchema.find();
    res.json({val:data});
})

app.get('/',(req,res)=>{
    res.send("working fine");
})

app.listen(PORT || 5000,()=>{
    console.log("check");
})