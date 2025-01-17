// ===================== 📦 Import Required Modules ===================== //
const mongoose = require("mongoose"); // Mongoose for MongoDB interactions
const bcrypt = require("bcryptjs"); // For password hashing
const jwt = require("jsonwebtoken"); // For JWT token generation

// ===================== 📝 Define the User Schema ===================== //
const userSchema = new mongoose.Schema({
  // Username: Required, trimmed, between 3-20 characters, alphabetic with spaces
  user_name: {
    type: String,
    required: [true, "Username is required"],
    trim: true,
    minlength: [3, "Username must be at least 3 characters long!"],
    maxlength: [50, "Username cannot exceed 50 characters!"],
    match: [
      /^[A-Za-z0-9_ ]+$/,
      "Username can only contain letters, numbers, underscores, and spaces",
    ],
  },

  // Email: Required, unique, lowercase
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true, // 🛠️ Enforce uniqueness at the database level
    lowercase: true, // 🔥 Ensure case-insensitive storage
    trim: true,
    match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"],
  },

  // Phone: Required, Strict format (+CountryCode-CarrierCode-1234567)
  phone: {
    type: String,
    required: [true, "Phone number is required."],
    unique: true,
    trim: true,
    match: [
      /^\+\d{1,3}-\d{3}-\d{7}$/,
      "Invalid phone format. Use +92-300-1234567.",
    ],
  },

  // Password: Required, must be hashed before saving
  password: {
    type: String,
    required: [true, "Password is required"],
    minlength: [8, "Password must be at least 8 characters long"],
    select: false, // 🔒 Exclude password from query results by default
  },

  // Role: Restricted to specific values, defaults to 'user'
  role: {
    type: String,
    enum: ["user", "admin", "ceo"],
    default: "user",
  },

  // Timestamp: Auto-generated creation date
  created_at: {
    type: Date,
    default: Date.now,
    immutable: true, // Cannot be modified after creation
  },
});

// ===================== 🔒 Pre-save Hook for Password Hashing ===================== //
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next(); // Only hash if modified

  try {
    const salt = await bcrypt.genSalt(12); // Strong salt for security
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error); // Pass error to middleware
  }
});

// ===================== 🔑 Instance Methods ===================== //

// ===================== 🔑 Compare Password ===================== //
/**
 * Compares the entered password with the hashed password in the DB.
 * @param {string} enteredPassword - Plaintext password provided by the user.
 * @returns {Promise<boolean>} - True if passwords match, false otherwise.
 */
userSchema.methods.comparePassword = async function (enteredPassword) {
  try {
    return await bcrypt.compare(enteredPassword, this.password);
  } catch (error) {
    console.error("Error comparing passwords:", error);
    throw new Error("Password comparison failed.");
  }
};

// ===================== 🪙 Generate JWT Token ===================== //

/**
 * Generates a JWT token for user authentication.
 * @returns {string} - Signed JWT token.
 */
userSchema.methods.generateToken = function () {
  return jwt.sign(
    {
      id: this._id.toString(),
      email: this.email,
      role: this.role,
    },
    process.env.JWT_SECRET_KEY,
    { expiresIn: "1h" } // Token expires in 1 hour
  );
};

// ===================== 🚀 Export User Model ===================== //
const User = mongoose.model("User", userSchema);
module.exports = User;
