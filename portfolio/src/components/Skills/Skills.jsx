import "./Skills.css";

import { motion } from "framer-motion";

import {
FaReact,
FaNodeJs,
FaHtml5,
FaCss3Alt,
FaGitAlt,
FaJava,
FaGithub
} from "react-icons/fa";

import {
SiJavascript,
SiExpress,
SiMongodb,
SiMysql,
SiTailwindcss,
SiPostman,
SiVite
} from "react-icons/si";

const skills = [

{
title:"Frontend",
icon:<FaReact />,
items:[
{name:"React",level:"90%"},
{name:"JavaScript",level:"88%"},
{name:"HTML5",level:"95%"},
{name:"CSS3",level:"90%"},
{name:"Tailwind CSS",level:"85%"}
]
},

{
title:"Backend",
icon:<FaNodeJs />,
items:[
{name:"Node.js",level:"80%"},
{name:"Express.js",level:"60%"},
{name:"MongoDB",level:"70%"},
{name:"MySQL",level:"70%"}
]
},

{
title:"Programming",
icon:<FaJava />,
items:[
{name:"Java",level:"90%"},
{name:"DSA",level:"80%"},
{name:"OOP",level:"90%"}
]
},

{
title:"Tools",
icon:<FaGithub />,
items:[
{name:"Git",level:"80%"},
{name:"GitHub",level:"85%"},
{name:"Postman",level:"70%"},
{name:"Vite",level:"90%"}
]
}

];

function Skills(){

return(

<section
id="skills"
className="skills"
>

<div className="container">

<h2 className="section-title">

Skills

</h2>

<p className="section-subtitle">

Technologies I use to build scalable and modern applications.

</p>

<div className="skills-grid">

{

skills.map((skill,index)=>(

<motion.div

className="skill-card"

key={index}

initial={{opacity:0,y:60}}

whileInView={{opacity:1,y:0}}

transition={{duration:.6,delay:index*.15}}

viewport={{once:true}}

whileHover={{y:-10}}

>

<div className="skill-header">

<div className="skill-icon">

{skill.icon}

</div>

<h3>

{skill.title}

</h3>

</div>

{

skill.items.map((item,i)=>(

<div
className="progress-box"
key={i}
>

<div className="progress-title">

<span>

{item.name}

</span>

<span>

{item.level}

</span>

</div>

<div className="progress">

<div
className="progress-fill"
style={{width:item.level}}
>

</div>

</div>

</div>

))

}

</motion.div>

))

}

</div>

</div>

</section>

)

}

export default Skills;