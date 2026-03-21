import { useState } from "react";
import { FaArrowLeft, FaMicrophone } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./search.css";

function Search() {

const navigate = useNavigate();
const [query,setQuery] = useState("");
const [listening,setListening] = useState(false);

const suggestions = [
"React tutorial",
"Node.js backend",
"AI tools",
"Gaming highlights"
];

function startVoice(){

const SpeechRecognition =
window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.lang = "en-US";
recognition.interimResults = false;

setListening(true);

recognition.start();

recognition.onresult = (event)=>{

const voiceText = event.results[0][0].transcript;

setQuery(voiceText);

};

recognition.onend = ()=>{

setListening(false);

};

}

const filtered = suggestions.filter(item =>
item.toLowerCase().includes(query.toLowerCase())
);

return(

<div className="search-page">

<div className="search-header">

<button className="back-btn" onClick={()=>navigate(-1)}>
<FaArrowLeft/>
</button>

<input
type="text"
className="search-input-page"
placeholder="Search videos..."
value={query}
onChange={(e)=>setQuery(e.target.value)}
/>

<button className="mic-btn" onClick={startVoice}>
<FaMicrophone/>
</button>

</div>

{listening && (
<div style={{padding:"10px 25px"}}>
🎤 Listening... Speak now
</div>
)}

<div className="suggestions">

{filtered.map((item,index)=>(
<div key={index} className="suggestion-item">
{item}
</div>
))}

</div>

</div>

);

}

export default Search;