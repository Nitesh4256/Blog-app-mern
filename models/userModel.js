const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({


    username: {
        type: String,
        required: [true, 'please fill username']

    },
    email: {
        type: String,
        required: [true, 'please fill email']

    },
    password: {
        type: String,
        required: [true, 'please fill password']

    }
    , blogs: [
        {
            type: mongoose.Types.ObjectId,
            ref: "Blog"
        }
    ]



})

const userModel = mongoose.model("User", userSchema);
module.exports = userModel;