import {Router} from "express"
import BookModel from "../Models/BookModel.js";

const router = Router();


router.get("/list",async(req,res)=>{
    let allBooks = await BookModel.find();
    return res.json(allBooks)

})


router.get("/byId/:id",async(req,res)=>{
    let Id = req.params.id
    let book = await BookModel.findById(Id);
    return res.json(book)

})


router.post("/create",async(req,res)=>{
    let newBook = new BookModel(req.body);
    await newBook.save();
    return res.json(newBook)
})


router.put("/update/:id",async(req,res)=>{
    let Id = req.params.id

    await BookModel.findByIdAndUpdate(Id,req.body);
  
    return res.json({
        "message":"Done"
    })
})



router.delete("/delete/:id",async(req,res)=>{
    let Id = req.params.id
    await BookModel.findByIdAndDelete(Id);
    return res.json({
        "message":"Done"
    })
})




export default router;


