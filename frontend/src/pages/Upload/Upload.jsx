import { useState } from "react";
import "./upload.css";
import { uploadVideo } from "../../services/api";

function Upload(){

const [title,setTitle] = useState("");
const [file,setFile] = useState(null);

async function handleUpload(){

  if(!file){
    alert("Please select a file");
    return;
  }

  const formData = new FormData();
  formData.append("title", title);
  formData.append("video", file);

  try{
    await uploadVideo(formData);
    alert("Uploaded successfully");
  }catch(err){
    console.error(err);
    alert("Upload failed");
  }

}

return(

<div className="upload">

<h2>Upload Video</h2>

<input
placeholder="Video title"
value={title}
onChange={(e)=>setTitle(e.target.value)}
/>

<input
type="file"
onChange={(e)=>setFile(e.target.files[0])}
/>

<button onClick={handleUpload}>Upload</button>

</div>

);

}

export default Upload;