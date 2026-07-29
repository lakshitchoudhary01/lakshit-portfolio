import "./ScrollProgress.css";
import { useEffect, useState } from "react";

function ScrollProgress(){

const [width,setWidth]=useState(0);

useEffect(()=>{

const handleScroll=()=>{

const total=document.documentElement.scrollHeight-window.innerHeight;

const current=window.scrollY;

setWidth((current/total)*100);

};

window.addEventListener("scroll",handleScroll);

return()=>window.removeEventListener("scroll",handleScroll);

},[]);

return(

<div

className="progress-bar"

style={{width:`${width}%`}}

/>

);

}

export default ScrollProgress;