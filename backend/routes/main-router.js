// Import the Express framework
const express = require("express");

// Initialize a new router instance
const router = express.Router();

// Import controller functions
const { home } = require("../controllers/home-controller");
const { registerUser, loginUser } = require("../controllers/auth-controller");
const { contactForm } = require("../controllers/form-controller");

// Import validation schemas
const { signupSchema, loginSchema } = require("../validators/auth-validator");
const { contactFormSchema } = require("../validators/form-validator");

// Import middleware for validating requests
const validateRequest = require("../middlewares/validator-middleware");

/* ========================== 🏠 Home Route ========================== */
/**
 * @route   GET /
 * @desc    Home route
 * @access  Public
 */
router.get("/", home);

/* ========================== 👤 User Registration ========================== */
/**
 * @route   POST /register
 * @desc    Register a new user
 * @access  Public
 */
router.post(
  "/auth/register",
  validateRequest(signupSchema), // Validates the incoming data
  registerUser // Handles the registration logic
);

/* ========================== 🔑 User Login ========================== */
/**
 * @route   POST /login
 * @desc    Authenticate and log in a user
 * @access  Public
 */
router.post(
  "/auth/login",
  validateRequest(loginSchema), // Validates login data
  loginUser // Handles login logic
);

/* ========================== 📞 Contact Route ========================== */
/**
 * @route   POST /contact
 * @desc    Handle contact requests (dummy implementation)
 * @access  Public
 */
router.post(
  "/form/contact",
  validateRequest(contactFormSchema), // Validates contact data
  contactForm // Handles the contact route
);

// Export the router module to be used in other parts of the application
module.exports = router;
