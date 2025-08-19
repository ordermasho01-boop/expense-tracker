import mongoose from "mongoose";

const incomeSchema = new mongoose.Schema({
    userId:{type:mongoose.Schema.Types.ObjectId, ref: "User", require: true,},
    icon: String,
    source: {type:String, required:true}, //e.g freelance, salary
    amount:{type:Number, required:true},
    date:{type: Date, default:Date.now},
},
{ timestamps: true});
const Income = mongoose.model("Income", incomeSchema)
export default Income