import React, { useState } from "react";

const ContactForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  const handleSubmit = (e) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state }),
    })
      .then(() => alert("Success!"))
      .catch((error) => alert(error));

    e.preventDefault();
  };

  return (
    <div className="form-container">
      <form
        name="contact"
        method="post"
        netlify-honeypot="bot-field"
        data-netlify="true"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="form-name" value="contact" />
        <div className="field">
          <input
            type="text"
            name="fullname"
            id="fullname"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Darth Vader"
            required
          />

          <label htmlFor="fullname">Name</label>
        </div>
        <div className="field">
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            placeholder="LukesDad@deathstar.gov"
            required
          />
          <label htmlFor="email">Email</label>
        </div>
        <div className="field">
          <input
            type="textarea"
            name="message"
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Hello! How are you!"
            required
          />
          <label htmlFor="message">message</label>
        </div>

        <button className="form-button" type="submit">
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
