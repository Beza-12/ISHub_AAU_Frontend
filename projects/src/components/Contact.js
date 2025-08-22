import React, { useState } from "react";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Message sent by ${form.name}`);
  };

  return (
    <section id="contact">
       
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Your Name" onChange={handleChange} /> <br></br>
        <input name="email" type="email" placeholder="Your Email" onChange={handleChange} /> <br></br>
        <textarea name="message" placeholder="Your Message" onChange={handleChange}></textarea>
        <button type="submit">Send</button>
      </form>
     <br></br>
       <hr></hr>
    </section>
  );
}

export default Contact;
