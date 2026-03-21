import "./sidebar.css";

const categories = [
  "All",
  "Shorts",
  "Subscriptions",
  "Music",
  "Funny Videos",
  "Series",
  "Movies",
  "Gaming",
  "Coding",
  "E-Commerce",
  "News",
  "Live",
  "Sports",
  "Podcasts",
  "Marketing"
];

function Sidebar({setCategory}) {

return (

<div className="categories">

{categories.map((item,index)=>(

<button
key={index}
className="category-btn"
onClick={()=>setCategory(item)}
>

{item}

</button>

))}

</div>

);

}

export default Sidebar;