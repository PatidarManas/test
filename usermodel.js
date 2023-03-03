import mongoose from "mongoose";
const userschema = new mongoose.Schema({
    name:{
        type:String,
        reuired:true
    },
    contact_no:{
        
        type:Number,
        reuired:true,
        Minlenght:[10,"please enter valid no."],
        Maxlenght:[10,"please enter valid no."],
    },
    contact_email:{
        type:String,
        reuired:false,

    },
    address:{
        type:String,
        reuired:true
    },
    pincode:{
        type:Number,
        reuired:true,
        Minlenght:[6,"please enter valid no."],
        Maxlenght:[6,"please enter valid no."],
    },

   
    
})
export const user = mongoose.model("user",userschema)
