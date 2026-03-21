import { useState } from "react";

function VoiceTest() {

const [text,setText] = useState("");

function startVoice(){

const SpeechRecognition =
window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.lang = "en-US";

recognition.start();

recognition.onresult = (event)=>{

const voice = event.results[0][0].transcript;

console.log("Voice:",voice);

setText(voice);

};

}

return(

<div style={{padding:"40px"}}>

<h2>Voice Test</h2>

<input
value={text}
placeholder="Voice text will appear here"
style={{width:"300px",height:"40px"}}
/>

<br/><br/>

<button onClick={startVoice}>
Start Mic
</button>

</div>

);

}

export default VoiceTest;