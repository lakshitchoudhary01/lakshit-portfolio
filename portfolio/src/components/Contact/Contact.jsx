// import "./Contact.css";
// import { motion } from "framer-motion";

// import {
//   FaEnvelope,
//   FaPhone,
//   FaMapMarkerAlt,
//   FaGithub,
//   FaLinkedin
// } from "react-icons/fa";

import "./Contact.css";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin
} from "react-icons/fa";

function Contact() {
  const form = useRef();

const [loading, setLoading] = useState(false);

const sendEmail = (e) => {
  e.preventDefault();

  setLoading(true);

  emailjs
    .sendForm(
      "service_z35pgwa",
      "template_jb4f9yh",
      form.current,
      "rclQLQQXcMt4vh4Uc"
    )
    .then(() => {
      alert("Message sent successfully!");

      form.current.reset();

      setLoading(false);
    })
    .catch(() => {
      alert("Failed to send message. Please try again.");

      setLoading(false);
    });
};
  return (
    <section id="contact" className="contact">

      <div className="container">

        <h2 className="section-title">
          Contact Me
        </h2>

        <p className="section-subtitle">
          Let's build something amazing together.
        </p>

        <div className="contact-wrapper">

          <motion.div
            className="contact-info"
            initial={{x:-80,opacity:0}}
            whileInView={{x:0,opacity:1}}
            transition={{duration:.7}}
            viewport={{once:true}}
          >

            <div className="info-card">
              <FaEnvelope />
              <div>
                <h4>Email</h4>
                <p>choudharylakshit@gmail.com</p>
              </div>
            </div>

            <div className="info-card">
              <FaPhone />
              <div>
                <h4>Phone</h4>
                <p>+91 9870840110</p>
              </div>
            </div>

            <div className="info-card">
              <FaMapMarkerAlt />
              <div>
                <h4>Location</h4>
                <p>Muzaffarnagar, Uttar Pradesh</p>
              </div>
            </div>

            <div className="social-links">

              <a
                href="https://github.com/lakshitchoudhary01"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/lakshit-choudhary-b57450259/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>

            </div>

          </motion.div>

          <motion.form
  ref={form}
  onSubmit={sendEmail}
  className="contact-form"
  initial={{ x: 80, opacity: 0 }}
  whileInView={{ x: 0, opacity: 1 }}
  transition={{ duration: .7 }}
  viewport={{ once: true }}
>

          {/* <motion.form
            className="contact-form"
            initial={{x:80,opacity:0}}
            whileInView={{x:0,opacity:1}}
            transition={{duration:.7}}
            viewport={{once:true}}
          > */}
          <input
  type="text"
  name="from_name"
  placeholder="Your Name"
  required
/>

<input
  type="email"
  name="from_email"
  placeholder="Your Email"
  required
/>

<input
  type="tel"
  name="phone"
  placeholder="Phone Number"
/>

<input
  type="text"
  name="subject"
  placeholder="Subject"
  required
/>

<textarea
  name="message"
  rows="6"
  placeholder="Write your message..."
  required
></textarea>

            {/* <input
              type="text"
              placeholder="Your Name"
            />

            <input
              type="email"
              placeholder="Your Email"
            />

            <input
              type="text"
              placeholder="Subject"
            />

            <textarea
              rows="6"
              placeholder="Write your message..."
            ></textarea> */}
<button type="submit" disabled={loading}>
  {loading ? "Sending..." : "Send Message"}
</button>
            {/* <button type="submit">
              Send Message
            </button> */}

          </motion.form>

        </div>

      </div>

    </section>
  );
}

export default Contact;