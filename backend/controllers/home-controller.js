// ===================== 🌐 Import Required Modules ===================== //
const sendSuccessResponse = require("../utils/success-response");

/**
 * @desc  🏠 Home Route
 * @route GET /
 * @access  Public
 */
const home = (req, res) => {
  sendSuccessResponse(res, "--- Welcome to the MERN series. ---");
};

module.exports = { home};
