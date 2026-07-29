import "./Education.css";
import { motion } from "framer-motion";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";

const timeline = [
  {
    icon: <FaGraduationCap />,
    year: "2022 - 2026",
    title: "Bachelor of Technology (CSE)",
    place: "COER University, Roorkee",
    description:
      "Pursuing B.Tech in Computer Science Engineering. Learning Full Stack Development, Java, Data Structures & Algorithms, DBMS, Operating Systems and Software Engineering."
  },
  {
    icon: <FaBriefcase />,
    year: "2025 - Present",
    title: "MERN Stack Projects",
    place: "Self Learning",
    description:
      "Building responsive web applications using React, Node.js, Express.js and MongoDB. Exploring REST APIs, authentication, deployment and clean UI design."
  },
  {
    icon: <FaGraduationCap />,
    year: "2022",
    title: "Senior Secondary (Class XII)",
    place: "CBSE Board",
    description:
      "Completed Physics, Chemistry and Mathematics with Computer Science."
  },
  {
    icon: <FaGraduationCap />,
    year: "2020",
    title: "Secondary (Class X)",
    place: "CBSE Board",
    description:
      "Completed secondary education with strong interest in mathematics and computer programming."
  }
];

function Education() {
  return (
    <section id="education" className="education">

      <div className="container">

        <h2 className="section-title">
          Education & Experience
        </h2>

        <p className="section-subtitle">
          My academic journey and development as a software developer.
        </p>

        <div className="timeline">

          {timeline.map((item, index) => (
            <motion.div
              key={index}
              className="timeline-item"
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="timeline-icon">
                {item.icon}
              </div>

              <div className="timeline-card">

                <span className="year">
                  {item.year}
                </span>

                <h3>{item.title}</h3>

                <h4>{item.place}</h4>

                <p>{item.description}</p>

              </div>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Education;