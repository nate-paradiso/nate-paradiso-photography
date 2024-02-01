import React, { useState } from "react";
import "./ContactPage.scss";

export const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();

    // Perform your custom validation here
    if (!isValidEmail(formData.email)) {
      alert("Please enter a valid email address");
      return;
    } else {
      alert("success");
    }

    // Continue with form submission
    // ...

    // Reset form data after submission
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  const isValidEmail = email => {
    // Basic email validation using a regular expression
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  return (
    <div className="contact">
      <form
        className="gform"
        method="POST"
        data-email="natepphotography@gmail.com"
        action="https://script.google.com/macros/s/AKfycbwXHksOd-1SD06F5mQZZkKkuTtG-ybtjZIcNoHyxCsoHijDgh83bv3Kq68sbzik0JCgyg/exec"
        onSubmit={handleSubmit}
      >
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
        ></textarea>

        <button type="submit">Send</button>
      </form>
    </div>
  );
};
