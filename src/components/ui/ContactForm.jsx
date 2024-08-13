import React, { useState } from "react";
import "./contact.css";

// Modal component
const Modal = ({ isOpen, onClose, message }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Success</h2>
        <p>{message}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Validate fields
    validateField(name, value);
  };

  const validateField = (name, value) => {
    let errorMessage = "";

    switch (name) {
      case "name":
        if (value.trim().length < 3) {
          errorMessage = "Name must be at least 3 characters long";
        }
        break;
      case "email":
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(value)) {
          errorMessage = "Invalid email address";
        }
        break;
      case "message":
        if (value.trim() === "") {
          errorMessage = "Message is required";
        }
        break;
      default:
        break;
    }

    setErrors({
      ...errors,
      [name]: errorMessage,
    });
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    // Validate all fields before submitting
    validateField("name", formData.name);
    validateField("email", formData.email);
    validateField("message", formData.message);

    if (Object.values(errors).some((error) => error !== "")) {
      console.error("Validation errors:", errors);
      return;
    }

    const formElement = event.target;
    const formDataObject = new FormData(formElement);

    formDataObject.append("access_key", "88eeb5d1-5c86-48bf-bf34-b255452947af");

    const object = Object.fromEntries(formDataObject);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      if (res.ok) {
        const data = await res.json();
        console.log("Form submitted successfully:", data);
        formElement.reset();
        setFormData({
          name: "",
          email: "",
          message: "",
        });
        setErrors({
          name: "",
          email: "",
          message: "",
        });
        setModalMessage("Your message has been sent successfully!");
        setIsModalOpen(true);
      } else {
        console.error("Error:", res.status);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex-container">
      <form onSubmit={onSubmit} className="main-00001">
        <div className="mb-6">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            required
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>
        <div className="mb-6">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            required
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div className="mb-6">
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            rows="4"
            required
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          {errors.message && <span className="error">{errors.message}</span>}
        </div>
        <div className="text-center">
          <button type="submit">Submit</button>
        </div>
      </form>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={closeModal} message={modalMessage} />
    </div>
  );
};

export default ContactForm;
