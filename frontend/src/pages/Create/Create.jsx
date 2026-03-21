import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import { MdClose, MdCollections, MdEdit } from "react-icons/md";

import "./create.css";

function Create(){

const videoRef = useRef(null);
const mediaRecorderRef = useRef(null);

const navigate = useNavigate();

const [recording,setRecording] = useState(false);
const [preview,setPreview] = useState(null);


/* OPEN CAMERA */

useEffect(()=>{

async function startCamera(){

try{

const stream = await navigator.mediaDevices.getUserMedia({
video:true,
audio:true
});

if(videoRef.current){
videoRef.current.srcObject = stream;
}

mediaRecorderRef.current = new MediaRecorder(stream);

}catch(err){
console.error(err);
}

}

startCamera();

},[]);


/* RECORD VIDEO */

const startRecording = ()=>{

const chunks = [];

mediaRecorderRef.current.ondataavailable = e=>{
chunks.push(e.data);
};

mediaRecorderRef.current.onstop = ()=>{

const blob = new Blob(chunks,{type:"video/mp4"});
setPreview(URL.createObjectURL(blob));

};

mediaRecorderRef.current.start();
setRecording(true);

};


/* STOP RECORD */

const stopRecording = ()=>{
mediaRecorderRef.current.stop();
setRecording(false);
};


/* FILE MANAGER */

const handleFileUpload = (e)=>{
const file = e.target.files[0];
setPreview(URL.createObjectURL(file));
};


return(

<div className="create-page">

{/* TOP BAR */}

<div className="create-topbar">

<button onClick={()=>navigate("/")}>
<MdClose size={26}/>
</button>

<h3>Create</h3>

<div></div>

</div>


{/* CAMERA / VIDEO PREVIEW */}

{preview ? (

<video src={preview} controls className="camera"/>

) : (

<video
ref={videoRef}
autoPlay
playsInline
className="camera"
/>

)}


{/* BOTTOM CONTROLS */}

<div className="controls">

{/* GALLERY */}

<label className="icon-btn">

<MdCollections size={30}/>

<input
type="file"
accept="video/*"
hidden
onChange={handleFileUpload}
/>

</label>


{/* RECORD */}

<button
className={`record-btn ${recording ? "recording":""}`}
onClick={recording ? stopRecording : startRecording}
/>


{/* EDIT */}

<button className="icon-btn">
<MdEdit size={28}/>
</button>

</div>

</div>

);

}

export default Create;