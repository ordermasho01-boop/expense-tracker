import mongoose from 'mongoose'
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log('<<<<<<<< MongoDB Connected! >>>>>>>>'.cyan.bold.underline)
    } catch (error) {
        console.log('mongoDB connection error:', error)
    }
}
export default connectDB