import React, { useState } from "react";
import "./about.css";
import "./contact.css";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { IoCallSharp } from "react-icons/io5";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [masg, setMasg] = useState("");
  const [alertMsg, setAlertMsg] = useState("");

  const displayMsg = async (e) => {
    e.preventDefault();

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
    }

    // Clear fields after submission
    setName("");
    setEmail("");
    setMasg("");

    // Hide alert after 3 seconds
    setTimeout(() => setAlertMsg(""), 3000);
  };

  return (
    <div>
      <div className="cmain">
        <div className="amain">
          <div className="ahead">
            Contact <span style={{ color: "rgb(8 145 178)" }}>Me</span>
          </div>
          <div className="ahead1">Get in touch</div>
        </div>

        {/* Alert Box */}
        {alertMsg && (
          <div className="alert-box" style={{ 
              background: "#f8d7da", 
              color: "#721c24", 
              padding: "10px", 
              margin: "10px 0", 
              borderRadius: "5px",
              textAlign: "center"
          }}>
            {alertMsg}
          </div>
        )}

        <div className="cflex">
          <div className="cflex1">
            <form onSubmit={displayMsg}>
              <div>
                <input
                  className="cinput"
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div>
                <input
                  className="cinput"
                  name="email"
                  type="email"
                  placeholder="Your Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <textarea
                  className="cinput"
                  name="message"
                  style={{ height: "150px" }}
                  placeholder="Your Message"
                  value={masg}
                  onChange={(e) => setMasg(e.target.value)}
                  required
                />
              </div>
              <div>
                <button type="submit" className="hbtn">
                  Send Message
                </button>
              </div>
            </form>
          </div>

          <div className="cflex2">
            <div className="cfllex">
              <div className="cicon">
                <MdEmail />
              </div>{" "}
              &nbsp;&nbsp;
              <a
                style={{ textDecorationLine: "none" }}
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
              </div>{" "}
              &nbsp;&nbsp;
              <a
                style={{ textDecorationLine: "none" }}
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
              </div>{" "}
              &nbsp;&nbsp;
              <a
                style={{ textDecorationLine: "none" }}
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
    </div>
  );
}
