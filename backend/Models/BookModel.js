import mongoose from "mongoose";

let BookSchema = new mongoose.Schema(
  {
    BookName: {
      type: "String",
      required: true,
      minlength: [3, "Name must be at least 3 characters"],
    },
    BookPoster: {
      type: "String",
      required: true,
    },
    BookDesc: {
      type: "String",
      required: true,
      minlength: [10, "Description must be at least 10 characters"],
    },
    BookAuthor: {
      type: "String",
      required: true,
    },
    BookPrice: {
      type: "Number",
      required: true,
    },
    BookCategory: {
      type: "String",
      enum: ["Fiction", "Non-Fiction", "Self-Help", "Technology", "Horror"],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);


export default mongoose.model("BookModel", BookSchema);
