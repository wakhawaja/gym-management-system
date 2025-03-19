import React from "react";
import Contact_Content_0 from "../components/content/Contact_Content_0";
import Contact_Form_0 from "../components/form/Contact_Form_0";
import Map from "../components/Map";
import "../scss/pages/_contact.scss";


const Contact = () => {
  return (
    <section className="contact-us-section" aria-label="Contact Gold Spa">
      <div className="contact-us-container grid grid-two-cols">
        <Contact_Content_0 />
        <Contact_Form_0 />
      </div>
      <Map />
    </section>
  );
};

export default Contact;
