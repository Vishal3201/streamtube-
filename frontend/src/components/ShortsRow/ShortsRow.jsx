import "./shortsRow.css";
import { useNavigate } from "react-router-dom";

function ShortsRow(){

const navigate = useNavigate();

/* SAME SHORTS DATA */
const shorts = [
{ id:"s1", title:"Short 1" },
{ id:"s2", title:"Short 2" },
{ id:"s3", title:"Short 3" },
{ id:"s4", title:"Short 4" }
];

return(

<div className="shorts-row">

{shorts.map((short,index)=>(

<div
key={short.id}
className="short-card"
onClick={()=>navigate(`/shorts/${index}`)}   // 🔥 IMPORTANT
>

<p>{short.title}</p>

</div>

))}

</div>

);

}

export default ShortsRow;