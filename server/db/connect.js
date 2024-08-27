const mongoose = require('mongoose');

const connectDB = async (url) => {
    try {
        await mongoose.connect(url, {
            useNewUrlParser: true, // Necessary to avoid deprecation warnings
            useUnifiedTopology: true, // Necessary for newer MongoDB drivers
        });
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Failed to connect to MongoDB", error);
        throw error;
    }
};

module.exports = connectDB;
