import mongoose from 'mongoose'

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/SIMPLETODOLISTAPP');
        console.log('Database connected');
    } catch (err) {
        console.error('Database connection error: ', err);
        process.exit(1); // Exit process with failure
    }
};

export default connectDB;
