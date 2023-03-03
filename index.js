import app from "./app.js";
import mongoose from "mongoose";


mongoose.connect("mongodb+srv://manaspatidar170:9754052806Mpji@cluster0.tdlmlr6.mongodb.net/test?retryWrites=true&w=majority",{useNewUrlParser:true,useUnifiedTopology:true}).then(
    (data)=>{
        console.log("started connection");
    }).catch((error)=>{
        console.log(error);
    }

    
)
const server = app.listen(5000,()=>{
    console.log("app started listening")
})