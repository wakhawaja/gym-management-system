// ===================== 🌐 Import Required Modules ===================== //
const User = require("../models/user-model");       // User model for database operations
const sendSuccessResponse = require("../utils/success-response");

/**
 * @desc  👤 Register a new user (Prevents mass assignment)
 * @route POST /register
 * @access  Public
 */
const registerUser = async (req, res, next) => {
  try {
    const { user_name, email, phone, password } = req.body;

    // 🔍 Check if email or phone already exists (case-insensitive)
    const existingEmailPhone = await User.findOne({
      $or: [
        { email: email.toLowerCase() }, // Normalize email to lowercase
        { phone: phone }, // Check normalized phone
      ],
    });
    if (existingEmailPhone) {
      const error = new Error(
        "---  Email or phone number already exists - Try logging in or resetting your password! ---"
      );
      error.statusCode = 400;
      return next(error);
    }
    // 🔒 Explicitly whitelist fields to avoid mass assignment
    const newUser = new User({
      user_name,
      email: email.toLowerCase(), // Store email in lowercase
      phone: phone, // Store normalized phone
      password,
      role: "user", // Enforce 'user' role
    });
    await newUser.save(); // Save user to DB

    // Generate JWT token
    const token = await newUser.generateToken();

    sendSuccessResponse(
      res,
      "---  User registered successfully. ---",
      {
        token,
        user_id: newUser._id,
      },
      201
    );
  } catch (error) {
    next(error);
  }
};

/**
 * @desc  🔑 Login User
 * @route POST /login
 * @access Public
 */
const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email: email.toLowerCase() }).select(
      "+password"
    );
    if (!user || !(await user.comparePassword(password))) {
      const error = new Error("---  Invalid email or password!  ---");
      error.statusCode = 401;
      return next(error);
    }

    const token = await user.generateToken();

    sendSuccessResponse(
      res,
      "---  Login successful. ---",
      {
        token,
        user_id: user._id,
      },
      201
    );
  } catch (error) {
    next(error);
  }
};

module.exports = { registerUser, loginUser};
