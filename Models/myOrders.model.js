import mongoose from "mongoose";
const myOrder_schema=new mongoose.Schema({
    cust_id:{type:String},
    prod_id:{type:String},
    product_name:{type:String},
    category:{type:String},
    description:{type:String},
    price:{type:String},
    size:{type:String},
    quantity:{type:Number},
    banner:{type:String}
    
})

export default mongoose.model.myOrders||mongoose.model("myOrder",myOrder_schema)