const mongoose = require("mongoose");
const colors = require("colors");
const dotenv = require("dotenv");
dotenv.config();
const connectDB = async () => {



    try {

        await mongoose.connect(process.env.MONGO_URL)
        console.log(`connected to mongodb Datavase ${mongoose.connection.host}`.bgBlue.white);
    } catch (error) {
        console.log(`mongo Connect Error `.bgRed.white)
        console.log(error)

    }
}
module.exports = connectDB;