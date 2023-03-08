import "../components/ContactFormStyles.css";

function ContactForm() {
  return (
    <>
      <div className="form-container">
        <h1>Send a message to us!</h1>
        <form action="send-mail.php" method="POST">
          <input name="name" placeholder="Name" />
          <input name="email" placeholder="Email" />
          <input name="subject" placeholder="Subject" />
          <textarea name="message" placeholder="Message" rows="4"></textarea>
          <button>Send Message</button>
        </form>
      </div>
    </>
  );
}

export default ContactForm;
