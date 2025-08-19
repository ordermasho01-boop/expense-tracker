import Expense from "../models/Expense.js";
import xlsx from 'xlsx'

export const addExpense = async (req, res) => {
    const userId = req.user.id;
    try {
        const {amount, category, date, icon} = req.body;
        if(!amount || !category || !date){
           return res.status(400).json({message:"All fields are required!"})
        }
        const expense = new Expense ({
            userId, icon,category,amount, date: new Date(date)
        })
        await expense.save()
        res.status(200).json(expense)
    } catch (error) {
        res.status(500).json({message: "server error", error: error.message})

    }
};

//get all expense
export const getAllExpense =async (req, res) => {
    const userId =req.user.id;
    try {
        const expenses =await Expense.find({userId}).sort({date:-1});
        if(!expenses){
            return res.status(400).json({message:"expenses not found"})
        }
        res.status(200).json(expenses)
    } catch (error) {
        res.status(500).json({message:"server error", error:error.message})
    }
};

//get. one 
export const getOneExpense =async (req, res) => {
   
    try {
        const expense =await Expense.findById(req.params.id)
        if(!expense){
            return res.status(400).json({message:"expense not found"})
        }
        res.status(200).json(expense)
    } catch (error) {
        res.status(500).json({message:"server error", error:error.message})
    }
};

//delete expenses

export const deleteExpense =async (req, res) => {
 
    try {
        await Expense.findByIdAndDelete(req.params.id)
        res.status(200).json({message:"expense deleted!"})
    } catch (error) {
        re.status(500).json({message:"server error",error:error.message})
    }
};

//download excel

export const downloadExpenseExcel = async (req, res) => {
    const userId=req.user.id;
    try {
        const expense = await Expense.find({userId}).sort({date:-1});
        //prepare data for excel
        const data =expense.map((item)=>({
            Category: item.category,
            Amount: item.amount,
            Date: item.date,
        }));
        const wb = xlsx.utils.book_new();
        const ws = xlsx.utils.json_to_sheet(data);
        xlsx.utils.book_append_sheet(wb, ws,"Expense");
        xlsx.writeFile(wb,'expense_details.xlsx');
        res.download('expense_details.xlsx');
    } catch (error) {
        res.status(500).json({message:"server error",error:error.message})
    }
}