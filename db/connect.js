// Example connect.js
const mongoose = require('mongoose');

const connectDB = async () => {
    const uri = 'mongodb://localhost:27017/e-commerce'; // Replace with your actual MongoDB URI
    try {
        await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
    }
};

module.exports = connectDB;
