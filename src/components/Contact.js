import { useState } from "react";

function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email, "Message:", message);
  };

  return (
    <div className="mt-16 p-6 bg-[#e9e5dc] shadow-md rounded-lg">
      <h2 className="text-2xl font-bold">Contact Me</h2>
      <form onSubmit={handleSubmit} className="mt-4 space-y-4">
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-2 border rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          placeholder="Your Message"
          className="w-full p-2 border rounded"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit" className="bg-[#b7b9b8] text-[#333337] p-2 rounded hover:bg-white hover:text-black">
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;