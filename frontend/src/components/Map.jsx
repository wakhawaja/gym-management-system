import React from "react";
import "../scss/components/_map.scss";

const Map = () => {
  return (
    <section className="contact-map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11467.772798356624!2d74.37047654999999!3d31.4661513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919066888d233a7%3A0x907b9a4ede569120!2sPunjab%20Co-Operative%20Housing%20Society%2C%20Lahore%2C%20Pakistan!5e1!3m2!1sen!2s!4v1741827996438!5m2!1sen!2s"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  );
};

export default Map;
