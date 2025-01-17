const jwt = require("jsonwebtoken"); // Import JWT library

// Replace this with your actual secret key from the .env file
const secretKey = "myjwtsecretkey"; // Ensure this matches the key used for token generation
console.log(secretKey);
// The token you want to validate
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3N2U2ZTQwYTUzYjRmNzJkMzQ5MGJiNyIsImVtYWlsIjoidXNlckB5YWhvby5jb20iLCJwaG9uZSI6IjAwOTItMzAwLTEyMzQ1Njc4Iiwicm9sZSI6InVzZXIiLCJkYXRlIjoiMjAyNS0wMS0wOFQxOTozNzo0MC4xMzFaIiwiaWF0IjoxNzM2MzY1MDYwLCJleHAiOjE3MzYzNjg2NjB9.kFRpz8gwMtt6WirHqGIQ3B_ZTm_2iMhZ7PYDA-052I4";

try {
  // Verify the token
  const decoded = jwt.verify(token, secretKey);

  // Display the decoded token data
  console.log("Decoded Token:", decoded);
} catch (error) {
  console.error("Invalid Token:", error.message);
}
