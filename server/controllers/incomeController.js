import xlsx from 'xlsx'
import Income from "../models/Income.js";

export const addIncome = async (req, res) => {
    const userId = req.user.id;
    try {
        const {icon, source, amount, date} = req.body;
        if(!amount || !source || !date){
           return res.status(400).json({message: "All fields are required!"})
        }
        const newIncome = new Income({
            userId, icon,amount,source, date: new Date(date)
        });
        await newIncome.save();
        res.status(200).json(newIncome)
    } catch (error) {
        res.status(500).json({message: "server error", error: error.message})
    }
}

//get All incomes
export const getAllIncome = async (req, res) => {
    const userId = req.user.id;
    try {
        const incomes = await Income.find({userId}).sort({date:-1});
        res.status(200).json(incomes);
    } catch (error) {
        res.status(500).json({message: "server error", error: error.message});
    }
}

//delete income

export const deleteIncome = async (req,res) => {
   
    try {
        await Income.findByIdAndDelete(req.params.id)
        
        res.json({message: "income deleted successfully!"})
    } catch (error) {
        res.status(500).json({message:"server error", error: error.message})
    }
}
export const getIncome = async (req,res) => {
   
    try {
        const income = await Income.findById(req.params.id)
        if(!income){
            return res.status(400).json({msg:"income not found!"})
        }
        res.json(income)
    } catch (error) {
        res.status(500).json({message:"server error", error: error.message})
    }
}

//download income excel

export const downloadIncomeExcel = async (req, res) => {
    const userId=req.user.id;
    try {
        const income = await Income.find({userId}).sort({date:-1});
        //prepare data for excel
        const data =income.map((item)=>({
            Source: item.source,
            Amount: item.amount,
            Date: item.date,
        }));
        const wb = xlsx.utils.book_new();
        const ws = xlsx.utils.json_to_sheet(data);
        xlsx.utils.book_append_sheet(wb, ws,"Income");
        xlsx.writeFile(wb,'income_details.xlsx');
        res.download('income_details.xlsx');
    } catch (error) {
        res.status(500).json({message:"server error",error:error.message})
    }
}