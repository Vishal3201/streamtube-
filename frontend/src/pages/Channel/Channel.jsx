import VideoCard from "../../components/VideoCard/VideoCard";
import "./channel.css";

function Channel(){

return(

<div className="channel">

<div className="channel-header">

<img src="https://i.pravatar.cc/80"/>

<div>

<h2>StreamTube Dev</h2>

<p>200K Subscribers</p>

</div>

</div>

<div className="channel-videos">

<VideoCard video={{
title:"Platform Architecture",
channel:"StreamTube Dev",
views:"20K",
thumbnail:"https://picsum.photos/400/200",
channelAvatar:"https://i.pravatar.cc/40"
}}/>

</div>

</div>

);

}

export default Channel;