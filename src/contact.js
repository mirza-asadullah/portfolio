import React, { useState } from "react";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { IoCallSharp } from "react-icons/io5";
import './contact.css';
// CSS is included in a separate stylesheet "contact.css"

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [masg, setMasg] = useState("");
  const [alertMsg, setAlertMsg] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const displayMsg = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData();
    formData.append("access_key", "197d2902-beba-4c2c-9a97-6b64ac8f4e8a");
    formData.append("name", name);
    formData.append("email", email);
    formData.append("message", masg);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setAlertMsg("✅ Message sent successfully!");
      } else {
        setAlertMsg("❌ Message not sent. Please try again.");
      }
    } catch (error) {
      setAlertMsg("❌ Error sending message. Check your internet connection.");
    } finally {
      setIsSubmitting(false);
    }

    // Clear fields after submission
    setName("");
    setEmail("");
    setMasg("");

    // Hide alert after 3 seconds
    setTimeout(() => setAlertMsg(""), 3000);
  };

  return (
    <div className="cmain">
      <div className="amain">
        <div className="ahead">
          Contact <span className="accent-text">Me</span>
        </div>
        <div className="ahead1">Get in touch</div>
      </div>

      {/* Alert Box */}
      {alertMsg && (
        <div className={`alert-box ${alertMsg.includes("✅") ? "success" : "error"}`}>
          {alertMsg}
        </div>
      )}

      <div className="cflex">
        <div className="cflex1">
          <form onSubmit={displayMsg}>
            <div className="input-container">
              <input
                className="cinput"
                name="name"
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                aria-label="Your Name"
              />
            </div>
            <div className="input-container">
              <input
                className="cinput"
                name="email"
                type="email"
                placeholder="Your Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                aria-label="Your Email Address"
              />
            </div>
            <div className="input-container">
              <textarea
                className="cinput textarea"
                name="message"
                placeholder="Your Message"
                value={masg}
                onChange={(e) => setMasg(e.target.value)}
                required
                aria-label="Your Message"
              />
            </div>
            <div className="button-container">
              <button 
                type="submit" 
                className="hbtn" 
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>
        </div>

        <div className="cflex2">
          <div className="cfllex">
            <div className="cicon">
              <MdEmail />
            </div>
            <a
              className="contact-link"
              href="mailto:mirzasad78@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="ctxt">mirzasad78@gmail.com</div>
            </a>
          </div>
          <div className="cfllex">
            <div className="cicon">
              <IoCallSharp />
            </div>
            <a
              className="contact-link"
              href="tel:+923044140674"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="ctxt">(+92)3044041674</div>
            </a>
          </div>
          <div className="cfllex">
            <div className="cicon">
              <FaLocationDot />
            </div>
            <a
              className="contact-link"
              href="https://maps.app.goo.gl/TuoECoYULQRxpnG58"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="ctxt">Lahore Punjab Pakistan</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}