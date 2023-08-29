const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const colors = require("colors");
const dotenv = require("dotenv");
const path = require("path");
const connectDB = require("./config/db");


dotenv.config();
//  rest object


// route import

const userRoutes = require("./routes/userRoutes");
const blogRoutes = require("./routes/blogRoutes")
// mongodb connection   
connectDB();

const app = express();
app.use(cors({

}));
app.use(express.json());
app.use(morgan("dev"));

// routes

app.use('/api/v1/user', userRoutes)
app.use('/api/v1/blog', blogRoutes)

// 
app.use(express.static(path.join(__dirname, "./client/build")))
app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
})

const PORT = process.env.PORT || 8080
const DEV_MODE = process.env.DEV_MODE
// listen
app.listen(PORT, () => {
    console.log(`Server is running on port  ${DEV_MODE} and the ${PORT}:`.bgBlue);
})

