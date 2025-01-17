// ===================== 🌐 Import Required Modules ===================== //
const Contact = require("../models/contact-model"); // Contact model for form submissions
const sendSuccessResponse = require("../utils/success-response");

/**
 * @desc  📞 Contact Form Submission
 * @route POST /contact
 * @access Public
 */
const contactForm = async (req, res, next) => {
  try {
    const { user_name, email, message } = req.body;

    const newContact = new Contact({ user_name, email, message });
    await newContact.save();

    sendSuccessResponse(
      res,
      "---  Thank you for contacting us.  ---",
      {
        contact_id: newContact._id,
      },
      201
    );
  } catch (error) {
    next(error);
  }
};

module.exports = { contactForm };
