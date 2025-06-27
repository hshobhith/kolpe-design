import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Example using Formspree (free and simple)
    fetch("https://formspree.io/f/YOUR_FORM_ID", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then(() => alert("Message sent successfully!"))
      .catch(() => alert("Error sending message."));
  };

  return (
    <div className="max-w-7xl mx-auto p-6 pt-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Info */}
        <div className="space-y-4 text-gray-800">
          <h2 className="text-3xl font-light">Kolpe Design</h2>
          <p>Mangaluru</p>
          <p>Bengaluru</p>
          <p>Coorg</p>
          <p className="mt-4">Ph: +91 94830 50656</p>
          <p>Mail: <a href="mailto:kolpedesignstudio@gmail.com" className="underline">kolpedesignstudio@gmail.com</a></p>

          {/* Google Map */}
          {/* <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.2678650568415!2d78.43316731487692!3d17.43389798805142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb96e8dfdc8d63%3A0x6efbdfd49d5f7a6a!2sBanjara%20Hills!5e0!3m2!1sen!2sin!4v1687787793295!5m2!1sen!2sin"
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Google Map"
          ></iframe> */}
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 text-sm">Name *</label>
              <input
                type="text"
                name="name"
                required
                onChange={handleChange}
                className="w-full border-b border-gray-400 focus:outline-none focus:border-red-400"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm">Email *</label>
              <input
                type="email"
                name="email"
                required
                onChange={handleChange}
                className="w-full border-b border-gray-400 focus:outline-none focus:border-red-400"
              />
            </div>
          </div>

          <div>
            <label className="block mb-1 text-sm">Subject</label>
            <input
              type="text"
              name="subject"
              onChange={handleChange}
              className="w-full border-b border-gray-400 focus:outline-none focus:border-red-400"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm">Message</label>
            <textarea
              name="message"
              rows="4"
              onChange={handleChange}
              className="w-full border-b border-gray-400 focus:outline-none focus:border-red-400"
            ></textarea>
          </div>

          <button
            type="submit"
            className="mt-4 px-6 py-2 border border-black hover:bg-black hover:text-white transition-all"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
