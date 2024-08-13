import React from "react";
import ContactForm from "./ui/ContactForm";
import "./anime.css";

const Contact = ({ id }) => {
  return (
    <>
      <section id={id} className="contact">
        <h2>Contact Us</h2>
        <p>
          If you have any questions, suggestions, or feedback, we'd love to hear
          from you. Reach out to us using the contact form below.
        </p>
        <ContactForm />
      </section>
    </>
  );
};

export default Contact;
