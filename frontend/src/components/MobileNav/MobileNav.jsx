import { FaHome, FaPlusCircle, FaUser } from "react-icons/fa";
import { MdSubscriptions } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import "./mobileNav.css";
import { useNavigate } from "react-router-dom";

function MobileNav(){

const navigate = useNavigate();

return(

<div className="mobile-nav">

<div onClick={()=>navigate("/")}>
<FaHome/>
<p>Home</p>
</div>

<div onClick={()=>navigate("/shorts")}>
<SiYoutubeshorts/>
<p>Shorts</p>
</div>

<div onClick={()=>navigate("/create")}>
<FaPlusCircle/>
<p>Create</p>
</div>

<div onClick={()=>navigate("/subscriptions")}>
<MdSubscriptions/>
<p>Subs</p>
</div>

<div onClick={()=>navigate("/you")}>
<FaUser/>
<p>You</p>
</div>

</div>

);

}

export default MobileNav;