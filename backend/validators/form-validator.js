// ===================== 📦 Import Zod ===================== //
const { z } = require("zod");
/* ========================== 📞 Contact Validation Schema ========================== */
/**
 * Validates contact form data.
 */
const contactFormSchema = z.object({
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

  message: z
    .string({
      required_error: "All fields (name, email, message) are required!",
    })
    .trim()
    .min(10, { message: "Message must be at least 10 characters long!" })
    .max(5000, { message: "Message cannot exceed 5000 characters!" }),
});

// Export schemas for use in routes and controllers
module.exports = { contactFormSchema };
