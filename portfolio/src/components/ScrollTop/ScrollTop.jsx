import "./ScrollTop.css";

import { FaArrowUp } from "react-icons/fa";

import { useEffect, useState } from "react";

function ScrollTop(){

const[show,setShow]=useState(false);

useEffect(()=>{

const scroll=()=>{

setShow(window.scrollY>400);

};

window.addEventListener("scroll",scroll);

return()=>window.removeEventListener("scroll",scroll);

},[]);

const top=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

return(

<button

className={show?"top-btn active":"top-btn"}

onClick={top}

>

<FaArrowUp/>

</button>

);

}

export default ScrollTop;