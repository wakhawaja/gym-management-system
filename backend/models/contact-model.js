// Import required modules
const {Schema,model} = require("mongoose");

// 📝 Define the Contact schema
const contactSchema = new Schema(
  {
  // Username: Required, trimmed, between 3-50 characters, alphabetic with spaces
  user_name: {
    type: String,
    required: [true, "Username is required"],
    trim: true,
    minlength: [3, "Username must be at least 3 characters long!"],
    maxlength: [50, "Username cannot exceed 50 characters!"],
    lowercase: true, // 🔥 Ensure case-insensitive storage
  },

    // Email: Required, unique, lowercase
  email: {
    type: String,
    required: [true, "Email is required"],
    lowercase: true, // 🔥 Ensure case-insensitive storage
    trim: true,
    match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"],
  },
    // Message content
    message: {
      type: String,
      required: [true, "Message is required"],
      minlength: [10, "Message must be at least 10 characters long"],
      maxlength: [5000, "Message cannot exceed 5000 characters"],
    },

    // Timestamp of when the contact was made
    created_at: {
      type: Date,
      default: Date.now,
    },
  },
);

// Export the Contact model
const Contact = model("Contact", contactSchema);
module.exports = Contact;
