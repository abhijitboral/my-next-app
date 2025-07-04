import mongoose from "mongoose";
const MONGODB_URI = process.env.MONGODB_URI;
if (!MONGODB_URI) {
    throw new Error('Please define the MONGODB_URI environment variable');
}
const dbConnection = async () => {
    
    try {
        const connection = await mongoose.connect(MONGODB_URI);
        console.log('Connected to MongoDB:', connection.connection.name);
        return connection;
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        throw new Error('Failed to connect to database');
    }
}
export default dbConnection;
