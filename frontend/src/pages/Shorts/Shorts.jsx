import { useParams } from "react-router-dom";
import { useEffect, useRef } from "react";
import "./shorts.css";

function Shorts(){

const { index } = useParams();
const containerRef = useRef();

/* SHORTS DATA */
const shorts = [
{ id:"s1", src:"https://www.w3schools.com/html/mov_bbb.mp4" },
{ id:"s2", src:"https://www.w3schools.com/html/movie.mp4" },
{ id:"s3", src:"https://www.w3schools.com/html/mov_bbb.mp4" },
{ id:"s4", src:"https://www.w3schools.com/html/movie.mp4" }
];

/* SCROLL TO CLICKED SHORT */
useEffect(()=>{
if(containerRef.current){
containerRef.current.scrollTo({
top: window.innerHeight * Number(index),
behavior: "instant"
});
}
},[index]);

return(

<div className="shorts-page" ref={containerRef}>

{shorts.map((video,i)=>(

<div key={i} className="short-full">

<video
src={video.src}
className="short-video"
autoPlay
loop
controls
/>

</div>

))}

</div>

);

}

export default Shorts;