import "./categories.css";
import { useState } from "react";

function Categories(){

const list = ["All","Music","Gaming","Coding","News","Live","AI"];

const [active,setActive] = useState("All");

return(

<div className="categories">

{list.map((item,index)=>(

<button
key={index}
className={active === item ? "active" : ""}
onClick={()=>setActive(item)}
>

{item}

</button>

))}

</div>

);

}

export default Categories;