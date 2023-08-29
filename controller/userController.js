const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");

// ragister
exports.ragisterController = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    // validation
    if (!username || !email || !password) {
      return res.status(404).send({
        success: false,
        message: "Please fill all details",
      });
    }

    // existing user

    const exisitingUser = await userModel.findOne({ email });
    if (exisitingUser) {
      return res.status(401).send({
        success: false,
        message: "User already exisits",
      });
    }

    const hashPassword = await bcrypt.hash(password, 10);

    // save new user
    const user = new userModel({ username, email, password: hashPassword });
    await user.save();
    return res.status(201).send({
      success: true,
      message: "New user created",
      user
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      message: "Errror in Ragister callback",
      success: false,
    });
  }
};

// get all users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await userModel.find({});
    return res.status(200).send({
      usrCount: users.length,
      success: true,
      message: "all user data",
      users,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in getall user",
    });
  }
};

exports.loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    // validation
    if (!email || !password) {
      return res.status(401).send({
        success: false,
        message: "Please provide email or Password",
      });
    }
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(200).send({
        success: false,
        message: "Email is not register",
      });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).send({
        success: false,
        message: "Invalid username or password",
      });
    }
    return res.status(200).send({
      success: true,
      message: "Login succesfully",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Login callback",
      error,
    });
  }
};
