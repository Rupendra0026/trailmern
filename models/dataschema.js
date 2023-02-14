const mongoose=require("mongoose");


const dataSchema= new mongoose.Schema({
    name:{
        type:"String",
        required:true
    }
});

const data=mongoose.model("userdata",dataSchema);
module.exports=data;