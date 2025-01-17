// ===================== 📦 Import Zod ===================== //
const { z } = require("zod");

// ===================== 📝 Signup Validation Schema ===================== //
const signupSchema = z.object({
  // Username: 3–50 characters, letters, numbers, underscores, and spaces allowed
  user_name: z
    .string({ required_error: "Username is required!" })
    .trim()
    .min(3, { message: "Username must be at least 3 characters long!" })
    .max(50, { message: "Username cannot exceed 50 characters!" })
    .regex(/^[A-Za-z0-9_ ]+$/, {
      message:
        "Username can only contain letters, numbers, underscores, and spaces.",
    }),

  // Email: Valid email format
  email: z
    .string({ required_error: "Email is required!" })
    .trim()
    .email({ message: "Invalid email format!" }),

  // Phone: Validated for +CountryCode-CarrierCode-1234567 format
  phone: z
    .string({ required_error: "Phone number is required." })
    .trim()
    .regex(
      /^\+\d{1,3}-\d{3}-\d{7}$/,
      "Invalid phone number format. Use +92-300-1234567."
    ),

  // Password: Must meet complexity requirements
  password: z
    .string({ required_error: "Password is required!" })
    .trim()
    .min(8, { message: "Password must be at least 8 characters long!" })
    .max(32, { message: "Password cannot exceed 32 characters!" })
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).*$/, {
      message:
        "Password must include at least one uppercase letter, one lowercase letter, one number, and one special character!",
    }),

  // Role: Optional, defaults to 'user'
  role: z.enum(["user", "admin", "ceo"]).default("user"),
});

// ===================== 📝 Login Validation Schema ===================== //
const loginSchema = z.object({
  // Email: Required and must be in a valid format
  email: z
    .string({ required_error: "Email is required!" })
    .trim()
    .email({ message: "Invalid email format!" }),

  // Password: Required, must meet complexity requirements
  password: z
    .string({ required_error: "Password is required!" })
    .trim()
    .regex(/^[A-Za-z\d@$!%*?&]{8,32}$/, {
      message:
        "Password can include only uppercase , lowercase letter, number or special character from 8-32!",
    }),
});


// Export schemas for use in routes and controllers
module.exports = { signupSchema, loginSchema };
