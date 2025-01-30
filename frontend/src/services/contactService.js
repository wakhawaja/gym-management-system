import { API_ENDPOINTS } from "../constants";

const contactService = {
  submitContactForm: async (formData) => {
    try {
      const response = await fetch(API_ENDPOINTS.CONTACT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      return await response.json();
    } catch (error) {
      console.error("Error submitting contact form:", error);
    }
  },
};

export default contactService;
