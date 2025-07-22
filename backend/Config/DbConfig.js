import mongoose from "mongoose"
import "dotenv/config"



export default function DbConfig()
{
    mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log("Mongo DB Connected...");
    })
    .catch((e)=>{
        console.log(e);
    })
    
}