import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import "../components/ContactFormStyles.css";

function ContactForm() {
  const form = useRef();
  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [messageInput, setMessageInput] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_d20x0ci', 'template_mc3jhfq', form.current, 'Zcp_wyASYiwTqlx1-')
      .then((result) => {
          console.log(result.text);
          console.log("message sent");
          setNameInput("");
          setEmailInput("");
          setMessageInput("");
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <>
      <div className="form-container">
        <h1>Send us a message!</h1>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="user_name" value={nameInput} onChange={(e) => setNameInput(e.target.value)} placeholder="...name" />
          <input type="email" name="user_email" value={emailInput} onChange={(e) => setEmailInput(e.target.value)} placeholder="...email" />
          <textarea name="message" value={messageInput} onChange={(e) => setMessageInput(e.target.value)} placeholder="...your message" />
          <button type="submit" value="Send">SUBMIT</button>
        </form>
      </div>
    </>
  );
}

export default ContactForm;
