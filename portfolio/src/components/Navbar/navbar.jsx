import "./Navbar.css";
import { useEffect, useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-scroll";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

function Navbar() {
  const [menu, setMenu] = useState(false);
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={sticky ? "navbar active" : "navbar"}>
      <div className="logo">
        Lakshit
        <span>.</span>
      </div>

      <ul className={menu ? "nav-links open" : "nav-links"}>

        <li>
          <Link
            to="home"
            smooth={true}
            duration={500}
            spy={true}
            offset={-70}
            onClick={() => setMenu(false)}
          >
            Home
          </Link>
        </li>

        <li>
          <Link
            to="about"
            smooth={true}
            duration={500}
            spy={true}
            offset={-70}
            onClick={() => setMenu(false)}
          >
            About
          </Link>
        </li>

        <li>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            spy={true}
            offset={-70}
            onClick={() => setMenu(false)}
          >
            Skills
          </Link>
        </li>

        <li>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            spy={true}
            offset={-70}
            onClick={() => setMenu(false)}
          >
            Projects
          </Link>
        </li>

        <li>
          <Link
            to="education"
            smooth={true}
            duration={500}
            spy={true}
            offset={-70}
            onClick={() => setMenu(false)}
          >
            Education
          </Link>
        </li>

        <li>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            spy={true}
            offset={-70}
            onClick={() => setMenu(false)}
          >
            Contact
          </Link>
        </li>

      </ul>

      <div className="right-side">

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
        <ThemeToggle />

        <a
          className="resume-btn"
          href="/lakshit_resume.pdf"
          download
        >
          Resume
        </a>

        <div
          className="menu-btn"
          onClick={() => setMenu(!menu)}
        >
          {menu ? <FaTimes /> : <FaBars />}
        </div>

      </div>
    </header>
  );
}

export default Navbar;