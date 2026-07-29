import "./Contact.css";
import { motion } from "framer-motion";

import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin
} from "react-icons/fa";

function Contact() {
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
            className="contact-form"
            initial={{x:80,opacity:0}}
            whileInView={{x:0,opacity:1}}
            transition={{duration:.7}}
            viewport={{once:true}}
          >

            <input
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
            ></textarea>

            <button type="submit">
              Send Message
            </button>

          </motion.form>

        </div>

      </div>

    </section>
  );
}

export default Contact;