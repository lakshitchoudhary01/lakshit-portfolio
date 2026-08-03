import "./Projects.css";

import { motion } from "framer-motion";

import {
  FaGithub,
  FaExternalLinkAlt
} from "react-icons/fa";

import career from "../../assets/projects/career-guide.png";
import portfolio from "../../assets/projects/portfolio.png";
import ecommerce from "../../assets/projects/ecommerce.png";

const projects = [

{
title:"Career Guide Web Application",
timeline:"(July 2026-Present)",

image:career,

featured:true,

description:
"Building a full-stack MERN Career Guide application that provides personalized career recommendations, government exam information, eligibility checking, and timely notifications for students",

tech:[
"React",
"Node.js",
"Express",
"MongoDB",
"JWT"
],

github:"#",

demo:"#"

},

{

title:"Developer Portfolio",

image:portfolio,

description:
"A modern responsive portfolio built with React, Framer Motion and Glassmorphism UI.",

tech:[
"React",
"CSS",
"Framer Motion"
],

github:"https://github.com/lakshitchoudhary01/lakshit-portfolio/tree/main/portfolio",

demo:"#"

},

{

title:"Cloud Storage Drive",

image:ecommerce,

description:
"A full-stack cloud storage application with secure JWT authentication, file and folder management, Cloudinary integration, and a responsive dashboard for organizing and managing files online.",

tech:[
 "React",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Cloudinary"
],

github:"https://github.com/lakshitchoudhary01/cloud-storage-drive",

demo:"https://cloud-storage-drive-theta.vercel.app/register"

}

];

function Projects(){

const featured = projects.find(p=>p.featured);

const others = projects.filter(p=>!p.featured);

return(

<section
id="projects"
className="projects"
>

<div className="container">

<h2 className="section-title">

Projects

</h2>

<p className="section-subtitle">

Some projects I've built using modern web technologies.

</p>

<motion.div

className="featured-project"

initial={{opacity:0,y:80}}

whileInView={{opacity:1,y:0}}

transition={{duration:.7}}

viewport={{once:true}}

>

<div className="featured-image">

<img
src={featured.image}
alt={featured.title}
/>

</div>

<div className="featured-content">

<span className="featured-tag">

Featured Project

</span>

<h3>

{featured.title}

</h3>

<h2>{featured.timeline}</h2>



<p>

{featured.description}

</p>

<div className="tech-stack">

{

featured.tech.map((tech,index)=>(

<span
key={index}
>

{tech}

</span>

))

}

</div>

<div className="project-links">

<a
href={featured.github}
target="_blank"
rel="noreferrer"
>

<FaGithub />

GitHub



</a>

<a
href={featured.demo}
target="_blank"
rel="noreferrer"
>

<FaExternalLinkAlt />

Live Demo

</a>

</div>

</div>

</motion.div>

<div className="projects-grid">

{

others.map((project,index)=>(

<motion.div

className="project-card"

key={index}

initial={{opacity:0,y:70}}

whileInView={{opacity:1,y:0}}

transition={{duration:.6,delay:index*.2}}

viewport={{once:true}}

whileHover={{y:-10}}

>

<img
src={project.image}
alt={project.title}
/>

<div className="project-info">

<h3>

{project.title}

</h3>

<p>

{project.description}

</p>

<div className="tech-stack">

{

project.tech.map((item,i)=>(

<span
key={i}
>

{item}

</span>

))

}

</div>

<div className="project-links">

<a href={project.github}>

<FaGithub />

</a>

<a href={project.demo}>

<FaExternalLinkAlt />

</a>

</div>

</div>

</motion.div>

))

}

</div>

</div>

</section>

)

}

export default Projects;