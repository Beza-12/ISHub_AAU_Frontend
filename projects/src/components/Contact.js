import React from "react";

function Contact() {
  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <form action="mailto:bezawithaile@example.com" method="POST" encType="text/plain">
        <input name="name" placeholder="Your Name" required /> <br></br>
        <input name="email" type="email" placeholder="Your Email" required /> <br></br>
        <textarea name="message" placeholder="Your Message" required></textarea>
        <button type="submit">Send</button>
      </form>
      <br></br>
      <hr></hr>
    </section>
  );
}

export default Contact;
