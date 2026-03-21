import { useEffect, useRef } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:5000");

function Create(){

const videoRef = useRef(null);

useEffect(()=>{

async function startCamera(){

const stream = await navigator.mediaDevices.getUserMedia({
video:true,
audio:true
});

videoRef.current.srcObject = stream;

/* CAPTURE FRAMES */

const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");

setInterval(()=>{

canvas.width = videoRef.current.videoWidth;
canvas.height = videoRef.current.videoHeight;

ctx.drawImage(videoRef.current,0,0);

const frame = canvas.toDataURL("image/webp");

socket.emit("live-stream",frame);

},100);

}

startCamera();

},[]);

return(

<div>

<h2>LIVE STREAM</h2>

<video
ref={videoRef}
autoPlay
playsInline
style={{width:"100%"}}
/>

</div>

);

}

export default Create;