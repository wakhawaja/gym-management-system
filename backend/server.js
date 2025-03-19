// Import required modules
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mainRouter = require("./routes/main-router");
const connectDb = require("./utils/db");
const errorHandler = require("./middlewares/error-middleware");

// Initialize Express app
const app = express();

// Load environment variables
dotenv.config();

// Define PORT with fallback to 5000
const PORT = process.env.PORT || 5000;

// Middleware to enable CORS
const corsOptions = {
  origin: "http://localhost:5173",
  methods: "GET,POST,PUT,DELETE",
  credentials: true 
};
app.use(cors(corsOptions));

// Middleware to parse JSON bodies
app.use(express.json());

// Mount authentication routes
app.use("/api/", mainRouter);

// Global Error Middleware (must be last)
app.use(errorHandler);

// Start the server and connect to the database
const startServer = async () => {
  try {
    await connectDb(); // Connect to MongoDB
    app.listen(PORT, () => {
      console.log(`✅ Server running on http://localhost:${PORT}/api/`);
    });
  } catch (error) {
    console.error("❌ Server startup failed:", error.message);
    process.exit(1); // Terminate server on DB connection failure
  }
};

startServer();
