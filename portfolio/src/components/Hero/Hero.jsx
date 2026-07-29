import "./Hero.css";

import { TypeAnimation } from "react-type-animation";

import { motion } from "framer-motion";

import {
  FaGithub,
  FaLinkedin,
  FaDownload,
  FaArrowRight,
} from "react-icons/fa";

import profile from "../../assets/profile.png";

function Hero() {
  return (
    <section id="home" className="hero">

      <div className="hero-glow glow1"></div>

      <div className="hero-glow glow2"></div>

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 70 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.img
          src={profile}
          alt="Lakshit"
          className="hero-image"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.4 }}
        />

        <h4>Hello, I'm</h4>

        <h1>Lakshit Choudhary</h1>

        <TypeAnimation
          sequence={[
            "MERN Stack Developer",
            2000,
            "React Developer",
            2000,
            "Java",
            2000,
          ]}
          wrapper="h2"
          repeat={Infinity}
          speed={50}
          className="typing"
        />

        <p>
          Passionate Computer Science Engineer building modern web
          applications using React, Node.js, Express, MongoDB and Java.
          I love creating responsive websites and solving real-world
          problems with clean, scalable code.
        </p>


          <div className="floating-icons">

          <a href="#contact" className="btn-primary">
            Hire Me
            <FaArrowRight />
          </a>

          <a
            href="/lakshit_resume.pdf"
            download
            className="btn-secondary"
          >
            <FaDownload />

            Resume
          </a>

        </div>

        <div className="hero-social">

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
        <div className="floating-icons">

<span>⚛️</span>

<span>☕</span>

<span>🟢</span>

<span>🟨</span>

</div>
      </motion.div>

    </section>
  );
}

export default Hero;