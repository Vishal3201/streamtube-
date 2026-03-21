import "./videoCard.css";
import { FaEllipsisV } from "react-icons/fa";

function VideoCard(){

return(

<div className="video-card">

<div className="thumbnail-wrapper">

<img
className="thumbnail"
src="https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg"
alt="video"
/>

<span className="duration">10:25</span>

</div>


<div className="video-details">

<img
className="channel-avatar"
src="https://i.pravatar.cc/40"
alt="channel"
/>

<div className="video-text">

<h3 className="video-title">
React Tutorial for Beginners
</h3>

<p className="video-meta">
Code Academy • 120K views • 2 days ago
</p>

</div>

<FaEllipsisV className="video-menu"/>

</div>

</div>

);

}

export default VideoCard;