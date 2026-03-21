import "./navbar.css";
import { FaSearch, FaUserCircle, FaMoon, FaSun } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Navbar() {

const logo = "https://i.ibb.co/HDpPZf42/streamtube-logo.png";

const [dark, setDark] = useState(false);
const [search, setSearch] = useState("");

const navigate = useNavigate();

function toggleDark(){
setDark(!dark);
document.body.classList.toggle("dark");
}

return(

<div className="navbar">

{/* LEFT - LOGO */}
<div className="logo">
<img src={logo} alt="logo" className="logo-img"/>
<h2>StreamTube</h2>
</div>


{/* MOBILE SEARCH ICON */}
<div className="center-search">
<FaSearch onClick={()=>navigate("/search")} />
</div>


{/* DESKTOP SEARCH BAR */}
<div className="search-wrapper">

<div className="search-container">

<input
type="text"
placeholder="Search videos..."
className="search-input"
value={search}
onChange={(e)=>setSearch(e.target.value)}
onFocus={()=>navigate("/search")}
/>

<button
className="search-btn"
onClick={()=>navigate(`/search?q=${search}`)}
>
<FaSearch/>
</button>

</div>

</div>


{/* RIGHT SIDE */}
<div className="nav-right">

<button className="theme-btn" onClick={toggleDark}>
{dark ? <FaSun/> : <FaMoon/>}
</button>

<Link to="/login" className="login-btn">
<FaUserCircle/>
</Link>

</div>

</div>

);

}

export default Navbar;