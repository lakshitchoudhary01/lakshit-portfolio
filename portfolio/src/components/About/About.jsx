import "./About.css";

import { motion } from "framer-motion";

import profile from "../../assets/profile.png";

import {
  FaCode,
  FaLaptopCode,
  FaGraduationCap,
  FaJava,
} from "react-icons/fa";

function About() {
  return (
    <section id="about" className="about">

      <div className="container">

        <h2 className="section-title">About Me</h2>

        <p className="section-subtitle">
          Passionate developer building modern web applications and
          continuously learning new technologies.
        </p>

        <div className="about-wrapper">

          <motion.div
            className="about-image"
            initial={{ x: -80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img src={profile} alt="Lakshit" />
          </motion.div>

          <motion.div
            className="about-content"
            initial={{ x: 80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3>Who am I?</h3>

            <p>
              I'm <strong>Lakshit Choudhary</strong>, a Computer Science
              Engineering student passionate about Full Stack Web
              Development. I enjoy creating responsive websites,
              developing REST APIs, and solving real-world problems
              using modern technologies.
            </p>

            <p>
              My primary tech stack includes React, Node.js,
              Express.js, MongoDB, Java, SQL, and JavaScript.
              I also enjoy Data Structures & Algorithms and building
              scalable projects.
            </p>

            <div className="about-info">

              <div>
                <span>Name</span>
                <h4>Lakshit Choudhary</h4>
              </div>

              <div>
                <span>Email</span>
                <h4>choudharylakshit2@gmail.com</h4>
              </div>

              <div>
                <span>Location</span>
                <h4>Muzaffarnagar, UP, India</h4>
              </div>

              <div>
                <span>Education</span>
                <h4>B.Tech CSE (2026)</h4>
              </div>

            </div>

          </motion.div>

        </div>

        <div className="stats">

          <motion.div
            className="stat-card"
            whileHover={{ y: -10 }}
          >
            <FaLaptopCode />

            <h2>10+</h2>

            <p>Projects</p>

          </motion.div>

          <motion.div
            className="stat-card"
            whileHover={{ y: -10 }}
          >
            <FaCode />

            <h2>300+</h2>

            <p>DSA Problems</p>

          </motion.div>

          <motion.div
            className="stat-card"
            whileHover={{ y: -10 }}
          >
            <FaJava />

            <h2>8+</h2>

            <p>Technologies</p>

          </motion.div>

          <motion.div
            className="stat-card"
            whileHover={{ y: -10 }}
          >
            <FaGraduationCap />

            <h2>2026</h2>

            <p>Graduate</p>

          </motion.div>

        </div>

      </div>

    </section>
  );
}

export default About;