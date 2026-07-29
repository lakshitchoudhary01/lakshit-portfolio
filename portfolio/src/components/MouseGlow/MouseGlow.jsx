import "./MouseGlow.css";
import { useEffect, useState } from "react";

function MouseGlow() {

const[pos,setPos]=useState({x:0,y:0});

useEffect(()=>{

const move=(e)=>{

setPos({

x:e.clientX,

y:e.clientY

});

};

window.addEventListener("mousemove",move);

return()=>window.removeEventListener("mousemove",move);

},[]);

return(

<div

className="mouse-glow"

style={{

left:pos.x-150,

top:pos.y-150

}}

></div>

)

}

export default MouseGlow;