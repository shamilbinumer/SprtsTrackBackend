import mongoose from "mongoose";
const category_schema=new mongoose.Schema({
    category:{type:String},
    aboutCategory:{type:String}
})

export default mongoose.model.categorys||mongoose.model("category",category_schema)