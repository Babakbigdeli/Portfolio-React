import { useState } from "react";
import emailjs from "emailjs-com";

function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.trim() || !message.trim()) {
      setStatus({ type: "error", message: "Both fields are required." });
      return;
    }

    const templateParams = {
      from_email: email,
      message: message,
    };

    emailjs.send(
      process.env.REACT_APP_EMAILJS_SERVICE_ID, 
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID, 
      templateParams, 
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY
    )
      .then(() => {
        setStatus({ type: "success", message: "Message sent successfully!" });
        setEmail(""); 
        setMessage("");
      })
      .catch(() => setStatus({ type: "error", message: "Failed to send message. Try again later." }));
  };

  return (
    <div className="mt-16 p-6 bg-[#e9e5dc] shadow-md rounded-lg max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold">Contact Me</h2>
      <form onSubmit={handleSubmit} className="mt-4 space-y-4">
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-2 border rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <textarea
          placeholder="Your Message"
          className="w-full p-2 border rounded"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <button type="submit" className="bg-[#b7b9b8] text-[#333337] p-2 rounded hover:bg-white hover:text-black">
          Send Message
        </button>

        {status && (
          <p className={`mt-2 text-sm font-semibold ${status.type === "success" ? "text-green-600" : "text-red-600"}`}>
            {status.message}
          </p>
        )}
      </form>
    </div>
  );
}

export default Contact;
