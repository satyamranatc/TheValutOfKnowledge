import express from "express"
import cors from "cors"
import "dotenv/config"
import DbConfig from "./Config/DbConfig.js"
import BookRoute from "./Routes/BookRoute.js"

let app = express();
app.use(cors())
app.use(express.json())

DbConfig();


app.get("/",(req,res)=>{
    res.json({
        "message":"Successfully Running!"
    })
})


app.use("/api/books",BookRoute);



app.listen(process.env.PORT,()=>{
    console.log(`Server Is Running On ${process.env.PORT}...`);
})



